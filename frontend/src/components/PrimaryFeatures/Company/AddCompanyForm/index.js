import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addCompany } from "../../../../store/company";
import FormInput from "../../../Basic/FormHelpers/FormInput";


import './AddCompanyForm.css';

const AddCompanyForm = ({ hideForm }) => {
  const dispatch = useDispatch()
  const history = useHistory()


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tagline, setTagline] = useState('');
  const [validationObject, setValidationObject] = useState({ test: true });
  const [databaseErrors, setDatabaseErrors] = useState([])


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




    return (
    <div className='form-container'>
      <h2>Add A Company</h2>

      <form onSubmit={handleSubmit} className='add-company'>
      <div className="all-inputs">

                    <FormInput
                    labelText='Name'
                    id='name'
                    type='text'
                    stateVar={name}
                    setStateVar={setName}
                    maxLength={100}
                    required={true}
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
                <button type="submit" disabled={Object.values(validationObject).includes(false)}>Add Company</button>
                {/* <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit' /> */}
        </form>

      </div>
  );
};

export default AddCompanyForm;
