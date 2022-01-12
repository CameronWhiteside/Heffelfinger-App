import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { addCompany } from "../../../../store/company"
import { addEmployee } from "../../../../store/employee"

const AddCompanyButton = () => {

    const dispatch=useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user);

    const goToNewCompanyPage = async () => {

        let newCompany = {
            name: ' ',
            tagline: ' ',
            description:' '
        }

        try {
            let res = await dispatch(addCompany(newCompany))
            let newCompanyId = res.id

            console.log({newCompanyId})
            let newEmployee = {
                userId: sessionUser.id,
                companyId: newCompanyId,
                companyRoleId: 3
            }

            let employeeRes = await dispatch(addEmployee(newEmployee))
            console.log(employeeRes)


            history.push(`/companies/${res.id}`)
        } catch (e) {
            console.log({ e })
        }
    }

    return (
        <div className="view-company-button">
            <button onClick={()=>goToNewCompanyPage()}>
                    ADD A COMPANY
           </button>
        </div>
    )
}

export default AddCompanyButton
