import './PrimaryLink.css'

const PrimaryLink = ({ primaryLink, primaryLinkLabel }) => {
    return (
        <div className="primary-link">
            <a target="_blank" className="like-button" rel="noreferrer noopener" href={primaryLink}>
                {primaryLinkLabel}
            </a>
        </div>
    )
}

export default PrimaryLink
