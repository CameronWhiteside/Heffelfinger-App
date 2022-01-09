import { NavLink } from "react-router-dom"

// const AddCompanyButton = () => {
//     return (
//         <div className="add-company-button">
//             <NavLink to='/companies/new' className="like-button">
//                 Add Company
//             </NavLink>
//         </div>
//     )
// }

// export default AddCompanyButton


import { useHistory } from "react-router-dom"

const AddCompanyButton = () => {

    const history = useHistory()

    const goToNewCompanyForm = () => {
        history.push(`/companies/new`)
    }

    return (
        <div className="view-company-button">
            <button onClick={()=>goToNewCompanyForm()}>
                    REGISTER YOUR COMPANY
           </button>
        </div>
    )
}

export default AddCompanyButton
