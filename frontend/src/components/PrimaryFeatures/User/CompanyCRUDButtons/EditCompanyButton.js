import { editCompany } from "../../../../store/company"
import { useDispatch, useSelector } from 'react-redux'

import './EditCompanyButton.css'

export const EditCompanyButton = ({ entry, setEditInfoMode }) => {

        const dispatch = useDispatch();

        const sessionUser = useSelector(state => state.session.user);
        let hasPermission = false
        if (entry && entry.Users && sessionUser && entry.Users.map(user => user.id).includes(sessionUser.id)) hasPermission = true;
        if (!hasPermission) return null


    return (
         <div className="edit-company-button">
                <button
                    // onClick={() => dispatch(editCompany(entry.id))}
                onClick={() => setEditInfoMode(true)}
                >
                    Edit Profile
                </button>
        </div>
    );
}


export default EditCompanyButton
