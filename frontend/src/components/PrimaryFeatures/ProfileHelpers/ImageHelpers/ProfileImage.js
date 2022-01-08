

const ProfileImage = ({ url, size, name }) => {

    return (
    <div className={`profile-image-container ${size}`}>
            {url && <div className={`profile-image ${size}`} style={{backgroundImage: `url(${url})`}}>
            </div>}
            {!url && <div className={`profile-image ${size}`} style={{ backgroundColor: 'green' }}>
                {name.slice(0).toUpperCase()}
            </div>
            }
    </div>
    )
}

export default ProfileImage
