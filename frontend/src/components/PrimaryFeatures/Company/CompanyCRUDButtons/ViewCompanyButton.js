import { useHistory } from "react-router-dom"

const ViewCompanyButton = ({entry}) => {

    const history = useHistory()

    const goToCompanyPage = ({id}) => {
        history.push(`/companies/${id}`)
    }

    return (
        <div className="view-company-button">
            <button onClick={(e)=>goToCompanyPage(entry)}>
                    Learn More
           </button>
        </div>
    )
}

export default ViewCompanyButton
