import GetTicket from "./GetTicket"

const ProfileCallToAction = ({ dataObject, ctaType }) => {

    return (
        <div className="profile-call-to-action">
            {ctaType === 'ticket' &&
                <GetTicket />
            }
        </div>
    )
}

export default ProfileCallToAction
