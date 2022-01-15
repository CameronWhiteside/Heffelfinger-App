import { editUser, deleteUser } from "../../../../store/user"
import { useDispatch } from 'react-redux'


export const UserOwnerButtons = ({ user }) => {

    const dispatch = useDispatch();


    return (
        <span className="user-actions">
            <button
            className="edit-button icon-holder"
            onClick={() => dispatch(editUser(user.id))}
            >
                    Edit User
            </button>
            <button
                className="delete-button icon-holder"
                onClick={() => {

                    dispatch(deleteUser(user['id']))
                }}
            >
                Delete User
            </button>
        </span>
    );
}


export default UserOwnerButtons
