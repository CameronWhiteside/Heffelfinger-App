import { useHistory } from "react-router-dom"

const ViewUserButton = ({entry, sessionUser}) => {

    const history = useHistory()

    const goToUserPage = ({id}) => {
        history.push(`/users/${id}`)
    }

    return (
        <div className="view-user-button">
            <button onClick={(e)=>goToUserPage(entry)}>
                    Learn More
           </button>
        </div>
    )
}

export default ViewUserButton
