import FeedCard from "./FeedCard"
import './FeedArea.css'


const FeedArea = ({ children, entries,  maxEntries, urlPathName, alias }) => {
    if (!maxEntries && !entries) {
        maxEntries = 0
    } else {
        if (!maxEntries) maxEntries = entries.length
    }

    let returnedEntries = []
    if (entries) returnedEntries = entries.slice(0, maxEntries)

    return(
        <div className="feed-area">
            <h3>{alias}</h3>
            {returnedEntries.length === 0 && <p>No {urlPathName} added yet</p>}
            <div className='feed-card-list'>
                {returnedEntries.length > 0 && returnedEntries.map(entry => (
                    <FeedCard
                        key={entry.id}
                        urlPathName={urlPathName}
                        entry={entry}
                    />

                ))}
            </div>
            {children}
        </div>
    )

}

export default FeedArea
