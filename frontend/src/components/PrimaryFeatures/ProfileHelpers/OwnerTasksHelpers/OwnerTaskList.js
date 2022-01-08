const OwnerTaskList = ({ dataObject, profileType }) => {
    if (profileType === 'company') {
        return (
            <div className="owner-task-list">
            { profileType === 'company' &&
                <span>Add a website lol</span>
            }
            </div >
        )
    }
}

export default OwnerTaskList
