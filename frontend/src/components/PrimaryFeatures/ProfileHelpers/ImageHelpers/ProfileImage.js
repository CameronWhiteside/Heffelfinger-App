

const ProfileImage = ({ url, size, name }) => {

    return (
    <div class={`profile-image-container ${size}`}>
            {url && <div className={`profile-image ${size}`} style={`background-image: url(${url})`}>
            </div>}
            {!url && <div className={`profile-image ${size}`} style={`background-color: 'green'`}>
                {name.slice(0).toUpperCase()}
            </div>
            }
    </div>
    )
}

export default ProfileImage
