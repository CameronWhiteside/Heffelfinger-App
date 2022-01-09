import './ProfileImage.css'

const ProfileImage = ({ url, size, name }) => {

    return (
        <>
            {url &&
                <div className={`profile-image-container ${size}`} style={{ backgroundImage: `url(${url})`,  backgroundColor: 'var(--neutral-1000)' }}>
                </div>
            }
            {!url &&
                <div className={`profile-image-container empty ${size}`} style={{ backgroundColor: 'var(--primary-600)' }}>
                    <span className={`fake-image ${size}`}>
                        {name[0].toUpperCase()}
                    </span>
                </div>
            }
        </>
    )
}

export default ProfileImage
