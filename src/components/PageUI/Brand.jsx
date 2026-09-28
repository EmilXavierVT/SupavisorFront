import supavisorLogo from "../../imports/UserDashboard/46917acae7ee7a9529490fdf4b9a963b0093d7b6.png"
import companyLogo from "../../imports/UserDashboard/50d26da0d1b10c919282a9cbda684780efd597e6.png"

export default function Brand({ compact = false }) {
  return (
    <div className="page-brand">
      <img className="page-brand-symbol" src={supavisorLogo} alt="Supavisor" />
      {!compact && <div className="page-brand-wordmark-frame"><img className="page-brand-wordmark" src={companyLogo} alt="Morgendagens Måltid" /></div>}
    </div>
  )
}