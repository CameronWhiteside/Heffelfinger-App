import { editUser } from "../../../../store/user"
import { useDispatch, useSelector } from 'react-redux'

import './EditUserButton.css'

export const EditUserButton = ({ entry, setEditInfoMode }) => {

        const dispatch = useDispatch();
        const sessionUser = useSelector(state => state.session.user);
        let hasPermission = false
        if (entry && entry.Users && sessionUser && entry.Users.map(user => user.id).includes(sessionUser.id)) hasPermission = true;
        if (!hasPermission) return null


    return (
         <div className="edit-user-button">
                <button
                    // onClick={() => dispatch(editUser(entry.id))}
                onClick={() => setEditInfoMode(true)}
                >
                    Edit Profile
                </button>
        </div>
    );
}


export default EditUserButton
