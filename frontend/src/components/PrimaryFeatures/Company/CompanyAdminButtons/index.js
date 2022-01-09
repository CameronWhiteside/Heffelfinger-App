import { editCompany, deleteCompany } from "../../../../store/company"
import { useDispatch } from 'react-redux'


export const CompanyOwnerButtons = ({ company }) => {

    const dispatch = useDispatch();


    return (
        <span className="company-actions">
            <button
            className="edit-button icon-holder"
            onClick={() => dispatch(editCompany(company.id))}
            >
                    Edit Company
            </button>
            <button
                className="delete-button icon-holder"
                onClick={() => {

                    dispatch(deleteCompany(company['id']))
                }}
            >
                Delete Company
            </button>
        </span>
    );
}


export default CompanyOwnerButtons
