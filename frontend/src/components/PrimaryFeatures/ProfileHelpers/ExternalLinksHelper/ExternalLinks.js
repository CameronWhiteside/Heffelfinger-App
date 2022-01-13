import PrimaryLink from "./PrimaryLinkHelpers/PrimaryLink"
import SocialLinksList from "./SocialLinksHelper/SocialLinksList"
import "./ExternalLinks.css"

const ExternalLinks = ({
    social1,
    social2,
    social3,
    social4,
    social5,
    social1Icon,
    social2Icon,
    social3Icon,
    social4Icon,
    social5Icon,
    primaryExternalLink,
    primaryExternalLabel
}) => {
    return (
        <div className="external-links glass">
            {primaryExternalLabel && primaryExternalLink && <PrimaryLink
                primaryLink={primaryExternalLink}
                primaryLinkLabel={primaryExternalLabel}
            />}
            {
                (
                    social1 ||
                    social2 ||
                    social3 ||
                    social4 ||
                    social5
                ) &&

                <SocialLinksList
                    social1={social1}
                    social2={social2}
                    social3={social3}
                    social4={social4}
                    social5={social5}
                    social1Icon={social1Icon}
                    social2Icon={social2Icon}
                    social3Icon={social3Icon}
                    social4Icon={social4Icon}
                    social5Icon={social5Icon}
                />
            }
        </div>
    )
}

export default ExternalLinks
