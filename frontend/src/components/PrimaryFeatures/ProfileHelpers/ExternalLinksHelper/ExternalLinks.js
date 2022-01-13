import PrimaryLink from "./PrimaryLinkHelpers/PrimaryLink"
import SocialLinksList from "./SocialLinksHelper/SocialLinksList"

const ExternalLinks = ({ primaryLink, socialLinksArray }) => {
    return (
        <div className="external-links glass">
            <PrimaryLink primaryLink={primaryLink}></PrimaryLink>
            <SocialLinksList socialLinksArray={socialLinksArray}></SocialLinksList>
        </div>
    )
}

export default ExternalLinks
