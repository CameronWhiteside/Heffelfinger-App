const PrettyDate = ({ date }) => {

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            weekday: "short",
            timezone: "UTC",
            hour12: "true",
            hour: 'numeric',
            minute: 'numeric'
        }

        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const prettyDate = formatDate(date)
    return (
        <>
            <h5 className='pretty-date'>{prettyDate}</h5>
        </>
    )
}

export default PrettyDate
