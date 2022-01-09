import { deleteCompany } from "../../../../store/company"
import { useDispatch } from 'react-redux'
import './DeleteCompanyButton.css'
import { toggleClass } from "../../../utils"


export const DeleteCompanyButton = ({ entry }) => {

    const dispatch = useDispatch();


    return (
        <div className="delete-company-button">
            <button
                className="delete-confirm hidden"
                onMouseOut={(e) => {
                     toggleClass(e.target, 'hidden')
                }}
                onClick={() => {

                    dispatch(deleteCompany(entry['id']))
                }}>
                Are You Sure?
            </button>
             <button
                className="delete-start"
                onClick={(e) => {
                    toggleClass(e.target.previousElementSibling, 'hidden')
                }}
            >
                 Delete Company
            </button>

        </div>
    );
}


export default DeleteCompanyButton
