const ExternalLinksList = ({ externalLinksArray }) => {
    return (
        <div className="external-links-list">
            <h5>Temp External Link Group</h5>
            {/* {externalLinksArray  && externalLinksArray.length && externalLinksArray.map(externalLink => (
                <a href={externalLink.link} key='external-link' className='external-link' target='_blank'>
                    <span className='link-text'>{externalLink.name}</span>
                </a>
            ))
            } */}
        </div>
    )
}

export default ExternalLinksList
