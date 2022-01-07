import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addCompany } from "../../../store/company";
import FormInput from "../../FormHelpers/FormInput";

import './AddCompanyForm.css';

const AddCompanyForm = ({ hideForm }) => {
  const dispatch = useDispatch()
  const history = useHistory()


  const [name, setName] = useState('');
  const [nameLength, setNameLength] = useState(0)
  const [description, setDescription] = useState('');
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [location, setLocation] = useState('');
  const [tagline, setTagline] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

    const updateName = (e) => {
        setName(e.target.value)
        setNameLength(e.target.value.length)
    }
    const updateDescription = (e) => {
        setDescription(e.target.value)
        setDescriptionLength(e.target.value.length)
    }

  const updateWebsite = (e) => setWebsite(e.target.value)
  const updateLogo = (e) => setLogo(e.target.value)

  useEffect(() => {
      const errors = [];

      const isWebsite = (str) => {
          const websiteRegEx = new RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'g')
          return websiteRegEx.test(str)
      }
      const isImageUrl = (str) => {
          const imageRegEx = new  RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(?:jpg|gif|png|svg)/, 'g')
          return imageRegEx.test(str)
      }

      if (!name) errors.push('Please enter a company name.')
      if (name && name.length > 100) errors.push('Company name must be fewer than 100 characters.')
      if (!name) errors.push('Please enter a company name.')
      if (name && name.length > 100) errors.push('Company name must be fewer than 100 characters.')
      if (!description) errors.push('Please enter a company description.')
      if (description && description.length > 1000) errors.push('Company description must be fewer than 1000 characters')
    setValidationErrors(errors)

  }, [name, tagline, description])


    const handleSubmit = async (e) => {

    e.preventDefault()

    let newCompany = {
        name,
        tagline,
        location,
        description,
        website,
        logo
    };

        let res = await dispatch(addCompany(newCompany))

        if (res) {
          history.push(`/companies/${res.newCompany.id}`)
        }

      reset();
  }

  const reset = () => {
    setName('');
    setTagline('');
    setDescription('');
  };




  return (
    <div className='form-container'>
      <h2>Add A Company</h2>

      <form onSubmit={handleSubmit} className='add-company'>
        <div className='listErrors'>
          {(validationErrors.length > 0) && validationErrors.map(error => <p className='errors' key={error}>{error}</p>)}
                </div>
                    <FormInput
                    labelText='Name'
                    id='name'
                    type='text'
                    stateVar={name}
                    setStateVar={setName}
                    maxLength={100}
                    required={true}
                    placeholder={'Enter a company name'}
                    validationErrors={validationErrors}
                    setValidationErrors={setValidationErrors}
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
                  />

                  <FormInput
                      labelText='Tagline'
                      id='tagline'
                      type='text'
                      stateVar={tagline}
                      setStateVar={setTagline}
                      required={true}
                      maxLength={25}
                      placeholder={'Enter a short company description'}
                  />

              <div>

        </div>

        <div>

        </div>

        <div>
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
              </div>


        <div>
          <label htmlFor='website'>
            <input
                type='text'
                placeholder='Website'
                id='website'
                value={website}
               onChange={updateWebsite}
            />
          </label>
        </div>

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
        </div>




        <button type='submit' disabled={validationErrors.length}>Submit</button>
      </form>

    </div>
  );
};

export default AddCompanyForm;
