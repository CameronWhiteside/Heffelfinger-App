import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addCompany } from "../../../store/company";
import FormInput from "../../FormHelpers/FormInput";
import FormValidationProvider from "../../FormHelpers/FormValidationContext";

import './AddCompanyForm.css';

const AddCompanyForm = ({ hideForm }) => {
  const dispatch = useDispatch()
  const history = useHistory()


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
//   const [descriptionLength, setDescriptionLength] = useState(0);
  const [tagline, setTagline] = useState('');
//   const [website, setWebsite] = useState('');
//   const [logo, setLogo] = useState('');
    const [validationObject, setValidationObject] = useState({ test: true });
    const [databaseErrors, setDatabaseErrors] = useState([])


    // const updateDescription = (e) => {
    //     setDescription(e.target.value)
    //     setDescriptionLength(e.target.value.length)
    // }


//   useEffect(() => {
//       const errors = [];

//       const isWebsite = (str) => {
//           const websiteRegEx = new RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'g')
//           return websiteRegEx.test(str)
//       }
//       const isImageUrl = (str) => {
//           const imageRegEx = new  RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(?:jpg|gif|png|svg)/, 'g')
//           return imageRegEx.test(str)
//       }

//       if (!name) errors.push('Please enter a company name.')
//       if (name && name.length > 100) errors.push('Company name must be fewer than 100 characters.')
//       if (!name) errors.push('Please enter a company name.')
//       if (name && name.length > 100) errors.push('Company name must be fewer than 100 characters.')
//       if (!description) errors.push('Please enter a company description.')
//       if (description && description.length > 1000) errors.push('Company description must be fewer than 1000 characters')
//     setValidationErrors(errors)

//   }, [name, tagline, description])


    const handleSubmit = async (e) => {

    e.preventDefault()

        let newCompany = {
            name,
            tagline,
            description,
        }

        try {
            let res = await dispatch(addCompany(newCompany))
            history.push(`/companies/${res.newCompany.id}`)
        } catch (e) {
            let res = await e.json()
            let errors = res.errors
            setDatabaseErrors([...errors])
        }

        // if (res.ok) {
        // } else {
        //     let errors = res.json()
        //     console.log({errors})
        // }

      reset();
  }

  const reset = () => {
    setName('');
    setTagline('');
    setDescription('');
  };




    return (
    //   <FormValidationProvider>
    <div className='form-container'>
      <h2>Add A Company</h2>

      <form onSubmit={handleSubmit} className='add-company'>

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


        {/* <div>
          <label htmlFor='description'>
            <textarea
                placeholder='Description'
                id='description'
                rows='10'
                cols='50'
                value={description}
                onChange={updateDescription}
            />
            <span className='length-counter'>{`${(descriptionLength ? `${descriptionLength}/1000` : '' )}`}</span>
          </label>
              </div> */}


        {/* <div>
          <label htmlFor='website'>
            <input
                type='text'
                placeholder='Website'
                id='website'
                value={website}
               onChange={updateWebsite}
            />
          </label>
        </div> */}
{/*
        <div>
          <label htmlFor='logo'>
            <input
                type='text'
                placeholder='Logo URL'
                id='logo'
                value={logo}
               onChange={updateLogo}
            />
          </label>
        </div> */}




        <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit'/>
                <ul>
                    {databaseErrors && databaseErrors.map(error => (
                        <li>{error}</li>
                    ))}
                </ul>
        </form>

      </div>
    // </FormValidationProvider>
  );
};

export default AddCompanyForm;
