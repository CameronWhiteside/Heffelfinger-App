import { NavLink } from "react-router-dom"

const AddCompanyButton = () => {
    return (
        <div className="add-company-button">
            <NavLink to='/companies/new' className="like-button">
                Add Company
            </NavLink>
        </div>
    )
}

export default AddCompanyButton
