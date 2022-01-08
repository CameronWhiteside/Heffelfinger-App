import './icons'

const ExternalLinksList = ({ externalLinksArray }) => {
    return (
        <>
            {externalLinksArray  && externalLinksArray.length && externalLinksArray.map(externalLink => (
                <a href={externalLink.link} key='external-link' className='external-link' target='_blank'>
                    <span className='link-text'>{externalLink.name}</span>
                </a>
            ))
            }
        </>
    )
}

export default ExternalLinksList
