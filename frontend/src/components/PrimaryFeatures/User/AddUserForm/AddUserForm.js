import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { editUser, loadUsers } from "../../../../store/user";
import FormInput from "../../../Basic/FormHelpers/FormInput";
// import ProfileFullPage from "../../ProfileHelpers/ProfileFullPage";
// import EditUserButton from "../UserCRUDButtons/EditUserButton";
// import DeleteUserButton from "../UserCRUDButtons/DeleteUserButton";


import './AddUserForm.css';

const AddUserForm = ({
          id,
          name,
          setName,
          biography,
          setBiography,
          location,
          setLocation,
          validationObject,
          setValidationObject,
          databaseErrors,
          setDatabaseErrors,
          editInfoMode,
          setEditInfoMode,
          newUser
}) => {

  const dispatch = useDispatch()
  const history = useHistory()

    const handleSubmit = async (e) => {

    e.preventDefault()

      let editedUser = {
            id,
            name,
            location,
            biography,
        }

      try {
        await dispatch(editUser(editedUser))
          dispatch(loadUsers())
          .then(setTimeout(() => {
            setEditInfoMode(false)
          }, 1000))

          // let newLoad = await dispatch(loadUsers())
          // console.log({newLoad})
            setEditInfoMode(false)
        } catch (e) {
            let res = await e.json()
            let errors = res.errors
            setDatabaseErrors([...errors])
        }
  }


  const dataObject = { name, location, biography }



  return (

    <div className="user-profile">
    {dataObject &&

      <div className='form-container'>


      <form onSubmit={handleSubmit} className='add-user'>
      <div className="all-inputs">


                  <FormInput
                      labelText='Location'
                      id='location'
                      type='text'
                      stateVar={location}
                      setStateVar={setLocation}
                      required={false}
                      maxLength={150}
                      placeholder={'Where even are you'}
                      validationObject={validationObject}
                      setValidationObject={setValidationObject}
                />

                  <FormInput
                      labelText='Biography'
                      id='biography'
                      type='textarea'
                      stateVar={biography}
                      setStateVar={setBiography}
                      required={false}
                      maxLength={1500}
                      placeholder={'Who even are you'}
                      validationObject={validationObject}
                      setValidationObject={setValidationObject}
                  />


                <div className="error-area">
                    {databaseErrors && databaseErrors.map(error => (
                        <div className="database-errors" key={error}>{error}</div>
                        ))}
                </div>
          </div>
                {/* <button type="submit" disabled={Object.values(validationObject).includes(false)}>Add User</button> */}
            <button
              className='fake-submit'
              type='submit'
              disabled={Object.values(validationObject).includes(false)}>Submit</button>
                {/* <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit' /> */}
        </form>
          {/* <button
            className="cancel-button"
            onClick={(e) => {
              if (newUser === true) {
                dispatch(deleteUser(id))
                history.push('/users')
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

export default AddUserForm;
