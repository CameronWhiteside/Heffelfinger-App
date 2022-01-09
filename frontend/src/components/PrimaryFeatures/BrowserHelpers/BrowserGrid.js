import './BrowserGrid.css'
import BrowserCard from "./BrowserCard"

const BroswerGrid = ({ entries, maxEntries = entries.length, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias }) => {

    let returnedEntries = entries.slice(0, maxEntries)

    return (
        <div className="browser-grid">
            {returnedEntries.map(entry => (
                <BrowserCard
                    key={entry.id}
                    entry={entry}
                    hasUsers={hasUsers}
                    usersAlias={usersAlias}
                    hasHost={hasHost}
                    hasCompanies={hasCompanies}
                    companiesAlias={companiesAlias}
                />
            ))}
        </div>
    )
}

export default BroswerGrid
