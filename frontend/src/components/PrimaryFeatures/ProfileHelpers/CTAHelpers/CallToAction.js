const CallToAction = ({ dataObject, ctaType }) => {

    return (
        <div className="call-to-action">
            <h6>{dataObject}</h6>
            <h6>{ctaType}</h6>
        </div>
    )
}

export default CallToAction