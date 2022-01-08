
import { NavLink } from 'react-router-dom';
import CompanyOwnerButtons from '../CompanyOwnerButtons'
import './CompanyDetails.css'

export const CompanyDetails = ({ company }) => {
  const {id, name} = company
  return (
    <NavLink to={`/companies/${id}`}>
    <div className="company-details">
      <h3>{name}</h3>
        <CompanyOwnerButtons company={id} />
      </div>
    </NavLink>
  );
}


export default CompanyDetails;
