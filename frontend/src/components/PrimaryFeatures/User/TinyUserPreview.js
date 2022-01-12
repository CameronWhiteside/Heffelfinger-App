import { NavLink } from "react-router-dom"
import ProfileImage from "../ProfileHelpers/ImageHelpers/ProfileImage"
import './TinyUserPreview.css'

const TinyUserPreview = ({ users, maxLength }) => {
    let trimmedUsers = users
    if(maxLength) trimmedUsers = users.slice(0, maxLength)
    const size = 'extra-small'
    return (
        <div className="tiny-user-preview">
            {trimmedUsers.map(user => (
                <NavLink key={user.id} to={`/users/${user.id}`}>
                    <ProfileImage key={user.id} url={user.imageUrl} name={user.firstName} size={size}></ProfileImage>
                </NavLink>
            ))}
        </div>
    )
}

export default TinyUserPreview
