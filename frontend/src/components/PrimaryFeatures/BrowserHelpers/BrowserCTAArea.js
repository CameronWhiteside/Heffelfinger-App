import './BrowserCTAArea.css'

const BrowserCTAArea = ({children}) => {
    return (
        <div className='browser-cta-area'>
            <div className='action-button'>
                {children}
            </div>
        </div>
    )
}

export default BrowserCTAArea
