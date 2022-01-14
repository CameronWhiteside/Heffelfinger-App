import { useHistory } from "react-router-dom"

const AddEventButton = ({companyId, userId, }) => {

    const history = useHistory()

    const goToNewEventForm = () => {
        history.push(`/events/new`)
    }

    return (
        <div className="add-event-button">
            <button
                onClick={() => goToNewEventForm()}
            disabled>
                {`CREATE A NEW EVENT (COMING SOON)`}
           </button>
        </div>
    )
}

export default AddEventButton
