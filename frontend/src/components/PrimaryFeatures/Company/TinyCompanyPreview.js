import { NavLink } from "react-router-dom"
import ProfileImage from "../ProfileHelpers/ImageHelpers/ProfileImage"

const TinyCompanyPreview = ({ companies, maxLength = 5 }) => {
    let trimmedCompanies = companies.slice(0, maxLength)
    const size = 'extra-small'
    return (
        <div className="tiny-company-preview">
            {trimmedCompanies.map(company => (
                <NavLink key={company.id} to={`/companies/${company.id}`}>
                    <ProfileImage key={company.id} imageUrl={company.imageUrl} defaultName={company.name} size={size}></ProfileImage>
                </NavLink>
            ))}
        </div>
    )
}

export default TinyCompanyPreview
