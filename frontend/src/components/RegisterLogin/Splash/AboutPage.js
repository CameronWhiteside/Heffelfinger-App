import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="letter">
            <h6>
            Dear kind visitor,
            </h6>
            <h2>
            Heffelfinger is a virtual coworking space where users can<span className='red-dot'>*</span> post their projects, invite contributors, schedule virtual events, and network with other users.
            </h2>

            <h6>
            <span className='red-dot'>*</span>or will be able to in the very near future
            </h6>

            <h3>
            This website was designed as a Week 16 solo midterm project as part of App Academy's 24-week Full Stack Software Engineering Bootcamp, and it was built with PostgreSQL, Express, React, and Node.
            </h3>
            <div className="sign-off">
                <h6>Thanks for visiting,</h6>
                <div className="external-links">
                    <h2 className='sign-off'>Cameron</h2>
                     <div className="icon-holder">

                        <a target="_blank" rel="noreferrer noopener"  href='https://github.com/CameronWhiteside/Heffelfinger-App' className="icon-link">
                            <div className="icon-image github-icon"
                                    style={{ backgroundImage: `url('/assets/icons/github.svg')`}}
                            />
                        </a>
                    </div>
                     <div className="icon-holder">

                        <a target="_blank" rel="noreferrer noopener"  href='https://www.linkedin.com/in/cameronwhiteside/' className="icon-link">
                            <div className="icon-image"
                                style={{ backgroundImage: `url('/assets/icons/linkedin.svg')`}}
                            />
                        </a>
                    </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default AboutPage
