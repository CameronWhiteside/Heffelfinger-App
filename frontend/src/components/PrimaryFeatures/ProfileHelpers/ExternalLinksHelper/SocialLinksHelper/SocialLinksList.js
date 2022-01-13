const SocialLinksList = ({ socialLinksArray }) => {
    return (
        <div className="social-links-list">
            <h5>Temp Social Link Group</h5>
            {socialLinksArray  && socialLinksArray.length && socialLinksArray.map(socialLink => (
                <a href={socialLink.link} key='social-link' className='social-link'  rel="noreferrer noopener">
                    <span className='link-text'>{socialLink.name}</span>
                </a>
            ))
            }
        </div>
    )
}

export default SocialLinksList
