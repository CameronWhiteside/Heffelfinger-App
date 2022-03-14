import { useHistory } from "react-router-dom"

const GetTicket = () => {

    const history = useHistory()

    // const goToNewEventForm = () => {
    //     history.push(`/events/new`)
    // }

    //POST AND RETURN ATTENDING MESSAGE

    return (
        <div className="get-ticket-button">
            <button onClick={() =>
                console.log(`buy ticket`)
            }>
                    TICKET BUTTON
           </button>
           <button onClick={() =>

            }>
                    SOLD OUT
           </button>
            <button onClick={() =>
                console.log(`you're already attending`)
            }>
                    ATTENDING
           </button>
        </div>
    )
}

export default GetTicket
