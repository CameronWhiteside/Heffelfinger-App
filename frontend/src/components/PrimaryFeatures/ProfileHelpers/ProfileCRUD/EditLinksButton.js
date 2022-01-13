// import { editLinks } from "../../../../store/links"
import { useDispatch, useSelector } from 'react-redux'

// import './EditLinksButton.css'

export const EditLinksButton = ({ entry, setEditLinksMode }) => {

        // const dispatch = useDispatch();

        const sessionUser = useSelector(state => state.session.user);
        let hasPermission = false
        if (entry && entry.Users && sessionUser && entry.Users.map(user => user.id).includes(sessionUser.id)) hasPermission = true;
        if (!hasPermission) return null


    return (
         <div className="edit-links-button">
                <button
                onClick={() => setEditLinksMode(true)}
                >
                    Edit Links
                </button>
        </div>
    );
}


export default EditLinksButton
