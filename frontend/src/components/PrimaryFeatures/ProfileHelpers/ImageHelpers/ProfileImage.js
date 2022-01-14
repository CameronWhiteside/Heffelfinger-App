import './ProfileImage.css'

const ProfileImage = ({ imageUrl, size, defaultName }) => {

    console.log({imageUrl, defaultName})

    return (
        <>
            {imageUrl &&
                <div className={`profile-image-container ${size}`} style={{ backgroundImage: `url(${imageUrl})`,  backgroundColor: 'var(--neutral-1000)' }}>
                </div>
            }
            {!imageUrl && defaultName &&
                <div className={`profile-image-container empty ${size}`} style={{ backgroundColor: 'var(--primary-800)' }}>
                    <span className={`fake-image ${size}`}>
                        {defaultName[0].toUpperCase()}
                    </span>
                </div>
            }
            {!defaultName &&
                <div className={`profile-image-container empty ${size}`} style={{ backgroundColor: 'var(--primary-800)' }}>
                    <span className={`fake-image ${size}`}>
                        {`!`}
                    </span>
                </div>
            }
        </>
    )
}

export default ProfileImage
