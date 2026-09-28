import { useEffect, useState } from "react"
import { getStoredUser, getUser } from "../services/apiReader.js"

export default function useEmployeeProfile() {
  const [session] = useState(getStoredUser)
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState({ user: session, loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadProfile() {
      try {
        if (!session?.id) throw new Error("Your session has no account ID. Please sign in again.")
        const user = await getUser(session.id, { signal: controller.signal })
        if (!user?.id || user.id !== session.id || !user.email) throw new Error("The server returned incomplete account details.")
        if (active) setState({ user, loading: false, error: null })
      } catch (error) {
        if (!active || error.name === "AbortError") return
        const message = error.status === 403
          ? "Your account is signed in, but the server does not permit access to your employee profile. Contact your administrator."
          : error.status === 401 ? "Your session has expired. Please sign in again." : error.message || "Unable to load your account details. Please try again."
        setState({ user: session, loading: false, error: message })
      }
    }

    loadProfile()
    return () => { active = false; controller.abort() }
  }, [session, attempt])

  function retry() {
    setState((previous) => ({ ...previous, loading: true, error: null }))
    setAttempt((value) => value + 1)
  }

  return { ...state, retry }
}