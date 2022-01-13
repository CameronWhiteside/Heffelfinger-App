import GetTicket from "./GetTicket"

const ProfileCallToAction = ({ dataObject, ctaType }) => {

    return (
        <div className="profile-call-to-action">
            <h3>Profile Call To Action</h3>
            {ctaType === 'ticket' &&
                <GetTicket />
            }
        </div>
    )
}

export default ProfileCallToAction
