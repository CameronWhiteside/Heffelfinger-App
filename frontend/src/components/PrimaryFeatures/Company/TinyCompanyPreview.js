import { NavLink } from "react-router-dom"
import ProfileImage from "../ProfileHelpers/ImageHelpers/ProfileImage"
import './TinyCompanyPreview.css'

const TinyCompanyPreview = ({ companies, maxLength }) => {
    let trimmedCompanies = companies
    if(maxLength) trimmedCompanies = companies.slice(0, maxLength)
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
