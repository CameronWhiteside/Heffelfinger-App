import './BrowserInfoArea.css'

const BrowserInfoArea = ({children, title, bodyCopy}) => {
    return (
        <div className='browser-info-area red-glass'>
            <h2>{title}</h2>
            <h6>{bodyCopy}</h6>
            <div className='sign-up-buttons'>
                {children}
            </div>
        </div>
    )
}

export default BrowserInfoArea
