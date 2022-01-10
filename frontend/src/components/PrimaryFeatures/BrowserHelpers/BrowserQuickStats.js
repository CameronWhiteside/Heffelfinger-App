import './BrowserCTAArea.css'

const BrowserQuickStatsArea = ({children, title}) => {
    return (
        <div className='browser-quick-stats-area bright-red-glass'>
            <div className='stats-container'>
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default BrowserQuickStatsArea
