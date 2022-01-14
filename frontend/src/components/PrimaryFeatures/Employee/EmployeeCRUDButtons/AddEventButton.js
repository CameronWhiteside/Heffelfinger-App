import { useHistory } from "react-router-dom"

const AddEmployeeButton = () => {

    // const history = useHistory()

    // const goToNewEventForm = () => {
    //     history.push(`/events/new`)
    // }

    return (
        <div className="add-event-button">
            <button
                disabled
                ////reveal form on click to enter email address
                // onClick={() => goToNewEventForm()}
            >
                    {'ADD CONTRIBUTOR (COMING SOON)'}
           </button>
        </div>
    )
}

export default AddEmployeeButton
