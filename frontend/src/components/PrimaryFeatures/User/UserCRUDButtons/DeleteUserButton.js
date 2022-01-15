import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from "../../../../store/user"
import './DeleteUserButton.css'
import { toggleClass } from "../../../utils"
import { useLocation, Redirect, useHistory } from 'react-router-dom'


export const DeleteUserButton = ({ entry }) => {

    const location = useLocation()
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    let hasPermission = false
    if (entry && entry.Users && sessionUser && entry.Users.map(user => user.id).includes(sessionUser.id)) hasPermission = true;
    if (!hasPermission) return null

    const handleDelete = () => {

        const currentPlace = location.pathname
        dispatch(deleteUser(entry['id']))
        if (currentPlace !== '/users') {
            history.push('/users')
        }
    }

    return (
        <div keep='true' className="delete-user-button">
                    <button
                        className="delete-confirm hidden"
                        onMouseOut={(e) => {
                            toggleClass(e.target, 'hidden')
                        }}
                        onClick={handleDelete}>
                        Are You Sure?
                    </button>
                    <button
                        className="delete-start"
                        onClick={(e) => {
                            toggleClass(e.target.previousElementSibling, 'hidden')
                        }}
                    >
                        DELETE ACCOUNT
                    </button>

                </div>

    );
}


export default DeleteUserButton
