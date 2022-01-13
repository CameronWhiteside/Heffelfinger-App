import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addCompany, deleteCompany, editCompany } from "../../../../store/company";
import FormInput from "../../../Basic/FormHelpers/FormInput";
import ProfileFullPage from "../../ProfileHelpers/ProfileFullPage";
import EditCompanyButton from "../CompanyCRUDButtons/EditCompanyButton";
import DeleteCompanyButton from "../CompanyCRUDButtons/DeleteCompanyButton";


import './AddCompanyForm.css';

const AddCompanyForm = ({
          id,
          hideForm,
          name,
          setName,
          description,
          setDescription,
          headline,
          setHeadline,
          validationObject,
          setValidationObject,
          databaseErrors,
          setDatabaseErrors,
          editInfoMode,
          setEditInfoMode,
          newCompany
}) => {

  const dispatch = useDispatch()
  const history = useHistory()


    const handleSubmit = async (e) => {

    e.preventDefault()

      let editedCompany = {
            id,
            name,
            headline,
            description,
        }

        try {
            dispatch(editCompany(editedCompany))
            setEditInfoMode(false)
        } catch (e) {
            let res = await e.json()
            let errors = res.errors
            setDatabaseErrors([...errors])
        }
  }


  const dataObject = { name, headline, description }



  return (

    <div className="company-profile">
    {dataObject &&

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
                      labelText='Headline'
                      id='headline'
                      type='text'
                      stateVar={headline}
                      setStateVar={setHeadline}
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
            <button
              className='fake-submit'
              type='submit'
              disabled={Object.values(validationObject).includes(false)}>Submit</button>
                {/* <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit' /> */}
        </form>
          {/* <button
            className="cancel-button"
            onClick={(e) => {
              if (newCompany === true) {
                dispatch(deleteCompany(id))
                history.push('/companies')
              } else {
                setEditInfoMode(false)
              }
            }
            }
          >Cancel</button> */}

    </div>




        // </ProfileFullPage>
    }
</div>














  );
};

export default AddCompanyForm;
