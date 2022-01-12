import { useHistory } from "react-router-dom"

const AddEmployeeButton = () => {

    // const history = useHistory()

    // const goToNewEventForm = () => {
    //     history.push(`/events/new`)
    // }

    return (
        <div className="add-event-button">
            <button
                ////reveal form on click to enter email address
                // onClick={() => goToNewEventForm()}
            >
                    ADD CONTRIBUTOR
           </button>
        </div>
    )
}

export default AddEmployeeButton
