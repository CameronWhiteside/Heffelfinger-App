import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addCompany } from "../../../../store/company";
import FormInput from "../../../Basic/FormHelpers/FormInput";
import ProfileFullPage from "../../ProfileHelpers/ProfileFullPage";
import EditCompanyButton from "../CompanyCRUDButtons/EditCompanyButton";
import DeleteCompanyButton from "../CompanyCRUDButtons/DeleteCompanyButton";


import './AddCompanyForm.css';

const AddCompanyForm = ({
          hideForm,
          name,
          setName,
          description,
          setDescription,
          tagline,
          setTagline,
          validationObject,
          setValidationObject,
          databaseErrors,
          setDatabaseErrors,
          hasCrud,
          setHasCrud
}) => {

  const dispatch = useDispatch()
  const history = useHistory()
  console.log({ name, tagline, description })


  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [tagline, setTagline] = useState('');
  // const [validationObject, setValidationObject] = useState({ test: true });
  // const [databaseErrors, setDatabaseErrors] = useState([])


    const handleSubmit = async (e) => {

    e.preventDefault()

        let newCompany = {
            name,
            tagline,
            description,
        }


        try {
            let res = await dispatch(addCompany(newCompany))
            history.push(`/companies/${res.id}`)
            setHasCrud(false)
            reset();
        } catch (e) {
            let res = await e.json()
            let errors = res.errors
            setDatabaseErrors([...errors])
        }
  }

  const reset = () => {
    setName('');
    setTagline('');
    setDescription('');
    setValidationObject({})
    setDatabaseErrors('');
  };

  const dataObject = { name, tagline, description }

  console.log({ dataObject })

  // let shortInfo = [tagline, location, createdAt].filter(el => !(!el)).join(' · ')



  return (

    <div className="company-profile">
    {dataObject &&
        // <ProfileFullPage
        // dataObject={dataObject}
        //     profileType='company'
        //     pageTitle={name || ' '}
        //     imageSize='medium'
        //     pageShortInfo={tagline || ''}
        //     pageDescription={description || ' '}
        //     externalLinksArray={[]}
        //     isProfileOwner={true}
        //     hasTags={false}
        //     tagsAlias='Tags'
        //     tagsSize='small'
        //     ctaType={false}
        //     hasUsers={true}
        //     usersAlias='Contributors'
        //     usersSize='medium'
        //     hasEvents={true}
        //     eventsAlias='Events'
        //     eventsSize='medium'
        //     hasCompanies={false}
        //     companiesAlias={false}
        //     companiesSize={false}
        //     hasTickets={false}
        //     ticketsAlias={false}
        //     ticketsSize={false}
        //     hasCrud={true}
        // >
        //   <EditCompanyButton entry={dataObject || {id: 0}} />
        //   <DeleteCompanyButton entry={dataObject || {id: 0}}  />
      <div className='form-container'>


      <form onSubmit={handleSubmit} className='add-company'>
      <div className="all-inputs">

                    <FormInput
                    labelText='Name'
                    id='name'
                    type='text'
                    stateVar={name}
                    setStateVar={setName}
                    minLength={2}
                    maxLength={50}
                    required={true}
                    restrictSafe={true}
                    placeholder={'Enter a company name'}
                    validationObject={validationObject}
                    setValidationObject={setValidationObject}
                />

                  <FormInput
                      labelText='Tagline'
                      id='tagline'
                      type='text'
                      stateVar={tagline}
                      setStateVar={setTagline}
                      required={true}
                      maxLength={150}
                      placeholder={'Enter a short company description'}
                      validationObject={validationObject}
                      setValidationObject={setValidationObject}
                />

                  <FormInput
                      labelText='Description'
                      id='description'
                      type='textarea'
                      stateVar={description}
                      setStateVar={setDescription}
                      required={true}
                      maxLength={1500}
                      placeholder={'Enter a long company description'}
                      validationObject={validationObject}
                      setValidationObject={setValidationObject}
                  />


                <div className="error-area">
                    {databaseErrors && databaseErrors.map(error => (
                        <div className="database-errors" key={error}>{error}</div>
                        ))}
                </div>
          </div>
                {/* <button type="submit" disabled={Object.values(validationObject).includes(false)}>Add Company</button> */}
                <button className='fake-submit' onClick={()=>setHasCrud(false)} disabled={Object.values(validationObject).includes(false)}>Add Company</button>
                {/* <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit' /> */}
        </form>
                <button className="cancel-button">Cancel</button>

    </div>




        // </ProfileFullPage>
    }
</div>














  );
};

export default AddCompanyForm;
