

const ProfileImage = ({ url, size }) => {

    return (
    <div class={`profile-image-container ${size}`}>
        <div className={`profile-image${size}`} style={`background-image: url(${url})`}>
        </div>
    </div>
    )
}

export default ProfileImage
