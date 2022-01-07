import { editCompany, deleteCompany } from "../../store/company"
import { useDispatch } from 'react-redux'

export const CompanyDetails = ({ company }) => {

    const dispatch = useDispatch();

  return (
    <li className="company-details">
      <span>{company.name}</span>
      <span>
        <button
          className="edit-button"
          onClick={() => dispatch(editCompany(company.id))}
        >
                  <i className={"fas fa-pencil"} />
        </button>
        <button
          className="delete-button"
          onClick={()=> dispatch(deleteCompany(company.id))}
        >
          <i className="fas fa-trash" />
        </button>
      </span>
    </li>
  );
}


export default CompanyDetails;
