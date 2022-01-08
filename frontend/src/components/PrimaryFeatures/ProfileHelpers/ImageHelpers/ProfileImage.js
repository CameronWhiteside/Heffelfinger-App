import './ProfileImage.css'

const ProfileImage = ({ url, size, name }) => {

    return (
        <>
            {url &&
                <div className={`profile-image-container ${size}`} style={{ backgroundImage: `url(${url})` }}>
                </div>
            }
            {!url &&
                <div className={`profile-image-container ${size}`} style={{ backgroundColor: 'green' }}>
                    {name.slice(0).toUpperCase()}
                </div>
            }
        </>
    )
}

export default ProfileImage
