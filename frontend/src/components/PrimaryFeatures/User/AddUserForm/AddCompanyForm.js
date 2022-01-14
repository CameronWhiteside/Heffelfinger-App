// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// import { editUser, loadCompanies } from "../../../../store/company";
// import FormInput from "../../../Basic/FormHelpers/FormInput";
// // import ProfileFullPage from "../../ProfileHelpers/ProfileFullPage";
// // import EditCompanyButton from "../CompanyCRUDButtons/EditCompanyButton";
// // import DeleteCompanyButton from "../CompanyCRUDButtons/DeleteCompanyButton";


// import './AddUserForm.css';

// const AddUserForm = ({
//           id,
//           name,
//           setName,
//           biography,
//           setBiography,
//           location,
//           setLocation,
//           validationObject,
//           setValidationObject,
//           databaseErrors,
//           setDatabaseErrors,
//           editInfoMode,
//           setEditInfoMode,

// }) => {

//   const dispatch = useDispatch()
//   const history = useHistory()

//     const handleSubmit = async (e) => {

//     e.preventDefault()

//       let editedCompany = {
//             id,
//             name,
//             location,
//             biography,
//         }

//       try {
//         await dispatch(editCompany(editedCompany))
//           dispatch(loadCompanies())
//           .then(setTimeout(() => {
//             setEditInfoMode(false)
//           }, 1000))

//           // let newLoad = await dispatch(loadCompanies())
//           // console.log({newLoad})
//             setEditInfoMode(false)
//         } catch (e) {
//             let res = await e.json()
//             let errors = res.errors
//             setDatabaseErrors([...errors])
//         }
//   }


//   const dataObject = { name, location, biography }



//   return (

//     <div className="company-profile">
//     {dataObject &&

//       <div className='form-container'>


//       <form onSubmit={handleSubmit} className='add-company'>
//       <div className="all-inputs">

//                     <FormInput
//                     labelText='Name'
//                     id='name'
//                     type='text'
//                     stateVar={name}
//                     setStateVar={setName}
//                     minLength={2}
//                     maxLength={50}
//                     required={true}
//                     restrictSafe={true}
//                     placeholder={'Enter a company name'}
//                     validationObject={validationObject}
//                     setValidationObject={setValidationObject}
//                 />

//                   <FormInput
//                       labelText='Location'
//                       id='location'
//                       type='text'
//                       stateVar={location}
//                       setStateVar={setLocation}
//                       required={true}
//                       maxLength={150}
//                       placeholder={'Enter a short company biography'}
//                       validationObject={validationObject}
//                       setValidationObject={setValidationObject}
//                 />

//                   <FormInput
//                       labelText='Biography'
//                       id='biography'
//                       type='textarea'
//                       stateVar={biography}
//                       setStateVar={setBiography}
//                       required={true}
//                       maxLength={1500}
//                       placeholder={'Enter a long company biography'}
//                       validationObject={validationObject}
//                       setValidationObject={setValidationObject}
//                   />


//                 <div className="error-area">
//                     {databaseErrors && databaseErrors.map(error => (
//                         <div className="database-errors" key={error}>{error}</div>
//                         ))}
//                 </div>
//           </div>
//                 {/* <button type="submit" disabled={Object.values(validationObject).includes(false)}>Add Company</button> */}
//             <button
//               className='fake-submit'
//               type='submit'
//               disabled={Object.values(validationObject).includes(false)}>Submit</button>
//                 {/* <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit' /> */}
//         </form>
//           {/* <button
//             className="cancel-button"
//             onClick={(e) => {
//               if (newCompany === true) {
//                 dispatch(deleteCompany(id))
//                 history.push('/companies')
//               } else {
//                 setEditInfoMode(false)
//               }
//             }
//             }
//           >Cancel</button> */}

//     </div>




//         // </ProfileFullPage>
//     }
// </div>














//   );
// };

// export default AddCompanyForm;
