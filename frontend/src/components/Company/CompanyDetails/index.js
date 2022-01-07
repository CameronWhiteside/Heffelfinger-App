
import CompanyOwnerButtons from '../CompanyOwnerButtons'
import './CompanyDetails.css'

export const CompanyDetails = ({ company }) => {

  return (
    <div className="company-details">
      <h3>{company.name}</h3>
        <CompanyOwnerButtons company={company} />
    </div>
  );
}


export default CompanyDetails;
