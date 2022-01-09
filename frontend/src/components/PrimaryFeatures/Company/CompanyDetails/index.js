
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CompanyOwnerButtons from '../CompanyOwnerButtons'
import './CompanyDetails.css'

export const CompanyDetails = ({ company }) => {

  const { id, name } = company
  return (
    <NavLink to={`/companies/${id}`}>
    <div className="company-details">
      <h4>{name}</h4>
        <CompanyOwnerButtons company={company} />
      </div>
    </NavLink>
  );
}


export default CompanyDetails;
