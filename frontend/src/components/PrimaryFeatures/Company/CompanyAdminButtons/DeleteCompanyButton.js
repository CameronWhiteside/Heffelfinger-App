import { deleteCompany } from "../../../../store/company"
import { useDispatch } from 'react-redux'


export const DeleteCompanyButton = ({ entry }) => {

    const dispatch = useDispatch();


    return (
        <div className="delete-company-button">
             <button
                className="delete-start"
                onClick={() => {

                    dispatch(deleteCompany(entry['id']))
                }}
            >
                 Delete Company
            </button>
            <button
                className="delete-confirm"
                onClick={() => {

                    dispatch(deleteCompany(entry['id']))
                }}>
                Are You Sure?
            </button>

        </div>
    );
}


export default DeleteCompanyButton
