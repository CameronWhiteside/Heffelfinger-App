import './BrowserInfoArea.css'

const BrowserInfoArea = ({children, title, bodyCopy}) => {
    return (
        <div className='browser-info-area red-glass'>
            <h1>{title}</h1>
            <p>{bodyCopy}</p>
            <div className='action-buttons'>
                {children}
            </div>
        </div>
    )
}

export default BrowserInfoArea
