import './BrowserGrid.css'
import BrowserCard from "./BrowserCard"


const BroswerGrid = (props) => {

    let { entries,  maxEntries, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias } = props

    if (!maxEntries) maxEntries = entries.length
    let returnedEntries = entries.slice(0, maxEntries)

    return (
        <div className="browser-grid glass">
            {returnedEntries.map(entry => (
                <BrowserCard
                    key={entry.id}
                    entry={entry}
                    hasUsers={hasUsers}
                    usersAlias={usersAlias}
                    hasHost={hasHost}
                    hasCompanies={hasCompanies}
                    companiesAlias={companiesAlias}
                >
                    {props.children}
                </BrowserCard>
            ))}
        </div>
    )
}

export default BroswerGrid
