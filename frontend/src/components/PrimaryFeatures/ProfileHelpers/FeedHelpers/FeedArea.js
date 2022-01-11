import FeedCard from "./FeedCard"
import './FeedArea.css'


const FeedArea = ({ entries,  maxEntries = entries.length, urlPathName, alias }) => {
    let returnedEntries = entries.slice(0, maxEntries)

    return(
        <div className="feed-area glass">
            <h2>{alias}</h2>
            <div className='feed-card-list'>
                {returnedEntries.map(entry => (
                    <FeedCard
                        key={entry.id}
                        urlPathName={urlPathName}
                        entry={entry}
                    />
                ))}
            </div>
        </div>
    )

}

export default FeedArea
