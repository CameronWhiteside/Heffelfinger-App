import FeedCard from "./FeedCard"
import './FeedArea.css'


const FeedArea = ({ children, entries,  maxEntries = entries.length, urlPathName, alias }) => {
    let returnedEntries = entries.slice(0, maxEntries)

    return(
        <div className="feed-area">
            <h3>{alias}</h3>
            <div className='feed-card-list'>
                {returnedEntries.map(entry => (
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
