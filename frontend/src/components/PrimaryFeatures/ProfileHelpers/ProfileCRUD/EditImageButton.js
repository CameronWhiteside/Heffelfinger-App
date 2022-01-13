// import { editImages } from "../../../../store/images"
import { useDispatch, useSelector } from 'react-redux'

// import './EditImagesButton.css'

export const EditImagesButton = ({ entry, setEditImageMode }) => {

        // const dispatch = useDispatch();

        const sessionUser = useSelector(state => state.session.user);
        let hasPermission = false
        if (entry && entry.Users && sessionUser && entry.Users.map(user => user.id).includes(sessionUser.id)) hasPermission = true;
        if (!hasPermission) return null


    return (
         <div className="edit-images-button">
                <button
                onClick={() => setEditImageMode(true)}
                >
                    Edit Image
                </button>
        </div>
    );
}


export default EditImagesButton
