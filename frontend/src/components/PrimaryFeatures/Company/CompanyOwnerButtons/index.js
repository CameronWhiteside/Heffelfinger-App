import { editCompany, deleteCompany } from "../../../../store/company"
import { useDispatch } from 'react-redux'


export const CompanyOwnerButtons = ({ company }) => {

    const dispatch = useDispatch();


    return (
        <span className="company-actions">
            <button
            className="edit-button"
            onClick={() => dispatch(editCompany(company.id))}
            >
                    <i className={"fas fa-edit"} />
            </button>
            <button
                className="delete-button"
                onClick={() => {
                    console.log(company.id)
                    dispatch(deleteCompany(company['id']))
                }}
            >
            <i className="fas fa-trash" />
            </button>
        </span>
    );
}


export default CompanyOwnerButtons
