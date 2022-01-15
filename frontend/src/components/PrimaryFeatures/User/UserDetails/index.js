
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserOwnerButtons from '../UserCRUDButtons'
import './UserDetails.css'

export const UserDetails = ({ user }) => {

  const { id, name } = user
  return (
    <NavLink to={`/users/${id}`}>
    <div className="user-details">
      <h4>{name}</h4>
        <UserOwnerButtons user={user} />
      </div>
    </NavLink>
  );
}


export default UserDetails;
