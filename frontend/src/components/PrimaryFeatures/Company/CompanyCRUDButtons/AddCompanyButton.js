import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { addCompany } from "../../../../store/company"

const AddCompanyButton = () => {

    const dispatch=useDispatch()
    const history = useHistory()

    const goToNewCompanyPage = async () => {

        let newCompany = {
            name: ' ',
            tagline: ' ',
            description:' '
        }


        try {
            let res = await dispatch(addCompany(newCompany))
            console.log({res})
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
