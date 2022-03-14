import { useDispatch, useSelector } from "react-redux"
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
            headline: ' ',
            description:' '
        }

        try {
            let res = await dispatch(addCompany(newCompany))
            let newCompanyId = res.id

            let newEmployee = {
                userId: sessionUser.id,
                companyId: newCompanyId,
                companyRoleId: 3
            }

            let employeeRes = await dispatch(addEmployee(newEmployee))


            history.push(`/companies/${res.id}`)
        } catch (e) {

        }
    }

    return (
        <div className="view-company-button">
            <button onClick={()=>goToNewCompanyPage()}>
                    ADD A PROJECT
           </button>
        </div>
    )
}

export default AddCompanyButton
