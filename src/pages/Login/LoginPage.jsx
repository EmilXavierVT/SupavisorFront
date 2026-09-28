import { useState } from "react"
import { useNavigate } from "react-router"
import { ChevronLeft } from "lucide-react"
import Brand from "../../components/PageUI/Brand.jsx"
import { login } from "../../services/apiReader.js"
import styles from "./LoginPage.module.css"

export default function LoginPage() {
  const navigate = useNavigate()
  const [loginRole, setLoginRole] = useState(null)
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [helpView, setHelpView] = useState(null)
  const [helpForm, setHelpForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [helpStatus, setHelpStatus] = useState("")

  function updateCredentials(event) {
    const { name, value } = event.target
    setCredentials((previous) => ({ ...previous, [name]: value }))
    setError("")
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return
    if (!credentials.email.trim() || !credentials.password) {
      setError("Please enter your email and password.")
      return
    }
    setIsSubmitting(true)
    try {
      await login(credentials.email.trim(), credentials.password)
      navigate("/", { replace: true })
    } catch (requestError) {
      setError(requestError.status === 401 ? "The email or password is incorrect. Please try again." : "Unable to sign in. Please try again in a moment.")
    } finally {
      setIsSubmitting(false)
    }
  }

  function resetLogin() {
    setLoginRole(null)
    setCredentials({ email: "", password: "" })
    setError("")
    setHelpView(null)
    setHelpStatus("")
  }

  function openHelpForm(view) {
    setHelpView(view)
    setHelpForm((current) => ({ ...current, email: current.email || credentials.email }))
    setHelpStatus("")
    setError("")
  }

  function updateHelpForm(event) {
    setHelpForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setHelpStatus("")
  }

  function submitHelpForm(event) {
    event.preventDefault()
    const storageKey = helpView === "forgot" ? "passwordResetRequests" : "accessRequests"
    const request = { ...helpForm, email: helpForm.email.trim(), requestedAt: new Date().toISOString(), accountType: loginRole }
    try {
      const existingRequests = JSON.parse(localStorage.getItem(storageKey)) || []
      localStorage.setItem(storageKey, JSON.stringify([...existingRequests, request]))
    } catch {
      localStorage.setItem(storageKey, JSON.stringify([request]))
    }
    setHelpStatus(helpView === "forgot" ? "If the account exists, password reset instructions will be sent to that email." : "Your access request has been recorded and is ready for administrator review.")
  }

  function goBack() {
    if (helpView) {
      setHelpView(null)
      setHelpStatus("")
      return
    }
    resetLogin()
  }

  return (
    <main className={`${styles.shell} app-page login-page`}>
      <div className="login-container">
        {!loginRole ? <section className="login-card login-role-card" aria-labelledby="login-title">
          <Brand />
          <div className="login-heading"><h1 id="login-title">Log in to your account</h1><p>Select how you want to sign in.</p></div>
          <div className="login-role-options"><button className="login-primary" onClick={() => setLoginRole("admin")}>Admin login</button><button className="login-secondary" onClick={() => setLoginRole("employee")}>Employee login</button></div>
        </section> : <>
          <Brand />
          {!helpView ? <section className="login-card" aria-labelledby="login-title">
              <div className="login-heading"><h1 id="login-title">{loginRole === "admin" ? "Administrator login" : "Employee login"}</h1><p>Use your Supavisor account credentials. Access is verified by the backend.</p></div>
              <form className="login-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
                <div className="login-field"><label htmlFor="login-email">Email</label><input id="login-email" name="email" type="email" value={credentials.email} onChange={updateCredentials} placeholder="your@email.com" autoComplete="username" required disabled={isSubmitting} aria-describedby={error ? "login-error" : undefined} /></div>
                <div className="login-field"><label htmlFor="login-password">Password</label><input id="login-password" name="password" type="password" value={credentials.password} onChange={updateCredentials} placeholder="Your password" autoComplete="current-password" required disabled={isSubmitting} aria-describedby={error ? "login-error" : undefined} /></div>
                {error && <div id="login-error" className="page-error" role="alert">{error}</div>}
                <button className="login-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Signing in…" : "Log in"}</button>
              </form>
              <div className="login-help-links"><button onClick={() => openHelpForm("forgot")}>Forgot your password?</button><button onClick={() => openHelpForm("access")}>Request access</button></div>
              <p className="login-help">For account access or password help, submit one of the forms above.</p>
            </section> : <section className="login-card login-help-card" aria-labelledby="login-help-title">
              <div className="login-heading"><h1 id="login-help-title">{helpView === "forgot" ? "Reset your password" : "Request account access"}</h1><p>{helpView === "forgot" ? "Enter the email address connected to your account." : "Tell the administrator who needs access."}</p></div>
              <form className="login-help-form" onSubmit={submitHelpForm}>
                {helpView === "access" && <div className="login-field"><label htmlFor="help-name">Full name</label><input id="help-name" name="name" value={helpForm.name} onChange={updateHelpForm} placeholder="Your full name" autoComplete="name" required /></div>}
                <div className="login-field"><label htmlFor="help-email">Email</label><input id="help-email" name="email" type="email" value={helpForm.email} onChange={updateHelpForm} placeholder="your@email.com" autoComplete="email" required /></div>
                {helpView === "access" && <><div className="login-field"><label htmlFor="help-phone">Phone number</label><input id="help-phone" name="phone" type="tel" value={helpForm.phone} onChange={updateHelpForm} placeholder="+45 12 34 56 78" autoComplete="tel" required /></div><div className="login-field"><label htmlFor="help-message">Reason for access</label><textarea id="help-message" name="message" value={helpForm.message} onChange={updateHelpForm} placeholder="Describe the access you need" rows={4} required /></div></>}
                {helpStatus && <div className="login-help-status" role="status">{helpStatus}</div>}
                <button className="login-primary" type="submit">{helpView === "forgot" ? "Send reset instructions" : "Submit access request"}</button>
              </form>
            </section>}
          <button className="login-back" disabled={isSubmitting} onClick={goBack}><ChevronLeft size={14} /> {helpView ? "Back to login" : "Back"}</button>
        </>}
      </div>
    </main>
  )
}
