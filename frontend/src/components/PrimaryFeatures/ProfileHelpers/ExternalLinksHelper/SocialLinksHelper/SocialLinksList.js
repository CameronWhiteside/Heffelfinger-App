import './SocialLinksList.css'

const SocialLinksList = ({
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
}) => {
    return (
        <div className="social-links-list">
               {social1Icon && social1 &&
                    <div className="icon-holder"
                >
                    <a target="_blank" rel="noreferrer noopener"  href={social1} className="icon-link">
                    <div className="icon-image"
                            style={{backgroundImage: social1Icon}}
                    >
                    </div>
                    </a>
                </div>
            }
                {social2Icon && social2 &&
                    <div className="icon-holder"
                >
                    <a target="_blank" rel="noreferrer noopener"  href={social2} className="icon-link">
                    <div className="icon-image"
                            style={{backgroundImage: social2Icon}}
                    >
                    </div>
                    </a>
                </div>
            }
              {social3Icon && social3 &&
                    <div className="icon-holder"
                >
                    <a target="_blank" rel="noreferrer noopener"  href={social3} className="icon-link">
                    <div className="icon-image"
                            style={{backgroundImage: social3Icon}}
                    >
                    </div>
                    </a>
                </div>
            }
            {social4Icon && social4 &&
                    <div className="icon-holder"
                >
                    <a target="_blank" rel="noreferrer noopener"  href={social4} className="icon-link">
                    <div className="icon-image"
                            style={{backgroundImage: social4Icon}}
                    >
                    </div>
                    </a>
                </div>
            }
            {social5Icon && social5 &&
                    <div className="icon-holder"
                >
                    <a target="_blank" rel="noreferrer noopener"  href={social5} className="icon-link">
                    <div className="icon-image"
                            style={{backgroundImage: social5Icon}}
                    >
                    </div>
                    </a>
                </div>
            }

        </div>
    )
}

export default SocialLinksList
