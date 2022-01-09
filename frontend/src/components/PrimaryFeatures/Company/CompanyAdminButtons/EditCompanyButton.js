import { editCompany } from "../../../../store/company"
import { useDispatch } from 'react-redux'

import './EditCompanyButton.css'

export const EditCompanyButton = ({ entry }) => {

    const dispatch = useDispatch();


    return (
        <div className="edit-company-button menu-button">
            <button
            onClick={() => dispatch(editCompany(entry.id))}
            >
                    Edit Company
            </button>
        </div>
    );
}


export default EditCompanyButton
