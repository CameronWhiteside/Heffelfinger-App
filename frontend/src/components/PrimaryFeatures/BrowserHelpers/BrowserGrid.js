import { useSelector } from 'react-redux';

import './BrowserGrid.css'
import BrowserCard from "./BrowserCard"




const BroswerGrid = ({ children, entries, maxEntries = entries.length, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias, urlPath }) => {

    const sessionUser = useSelector(state => state.session.user);

    let returnedEntries = entries.slice(0, maxEntries)
    console.log({ returnedEntries })

    let renderedEntries = returnedEntries.filter(entry => entry.name && entry.name.length > 1)
    let totalEntries = returnedEntries.length

    return (
        <div className="browser-grid glass scroll-area">
            {renderedEntries.map((entry, index) => (
                <BrowserCard
                    key={entry.id}
                    entry={entry}
                    hasUsers={hasUsers}
                    usersAlias={usersAlias}
                    hasHost={hasHost}
                    hasCompanies={hasCompanies}
                    companiesAlias={companiesAlias}
                    urlPath={urlPath}
                    renderOrder={totalEntries-index}
                >
                    {children}
                </BrowserCard>
            ))}
        </div>
    )
}

export default BroswerGrid
