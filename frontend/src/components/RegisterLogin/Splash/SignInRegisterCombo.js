import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";

import { addCompany } from "../../../../store/company";
import FormInput from "../../../Basic/FormHelpers/FormInput";


import './SignInRegisterCombo.css';

  const SignInRegisterCombo = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector((state) => state.session.user);

  const [newUser, setNewUser] = useState(false)
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationObject, setValidationObject] = useState({ test: true });
  const [databaseErrors, setDatabaseErrors] = useState([])

    const handleSignUpSubmit = (e, newUser) => {
        e.preventDefault();

        if (newUser) {
            if (password === confirmPassword) {
                setValidationObject({ test: true });
                return dispatch(sessionActions.signupCombined({ email, firstName, lastName, password }))
                    .catch(async (res) => {
                        const data = await res.json();
                        if (data && data.errors) setDatabaseErrors(data.errors);
                    });
            }
            return setDatabaseErrors(['Confirm Password field must be the same as the Password field']);
        } else {
            setValidationObject({ test: true });
            return dispatch(sessionActions.loginCombined({ email, password })).catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setDatabaseErrors(data.errors);
                }
            );
        }
    }


//     const handleSubmit = async (e) => {

//     e.preventDefault()

//         let newCompany = {
//             name,
//             tagline,
//             description,
//         }

//         try {
//             let res = await dispatch(addCompany(newCompany))
//             history.push(`/companies/${res.id}`)
//             reset();
//         } catch (e) {
//             let res = await e.json()
//             let errors = res.errors
//             setDatabaseErrors([...errors])
//         }
//   }




  const reset = () => {
    setNewUser(false)
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setConfirmPassword("");
    setValidationObject({ test: true });
    setDatabaseErrors([])
  };




    return (
    <div className='form-container'>
      <h2>Add A Company</h2>

      <form onSubmit={handleSignUpSubmit} className='sign-in-register-combo'>
                <div className="all-inputs">

                    {newUser &&
                        <FormInput
                            labelText='First Name'
                            id='firstName'
                            type='text'
                            stateVar={firstName}
                            setStateVar={setFirstName}
                            required={true}
                            isSafe={true}
                            placeholder={`Don't think too hard.`}
                            validationObject={validationObject}
                            setValidationObject={setValidationObject}
                        />
                    }
                    { newUser &&
                    <FormInput
                    labelText='Last Name'
                    id='lastName'
                    type='text'
                    stateVar={lastName}
                    setStateVar={setLastName}
                    required={true}
                    isSafe={true}
                    placeholder={`Sometimes we're formal here.`}
                    validationObject={validationObject}
                    setValidationObject={setValidationObject}
                    />
                    }

                 <FormInput
                      labelText='Email'
                      id='email'
                      type='text'
                      stateVar={email}
                      setStateVar={setEmail}
                      required={true}
                      maxLength={150}
                      pattern={/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm}
                      placeholder={'A real one, please'}
                      validationObject={validationObject}
                      setValidationObject={setValidationObject}
                />
                 <FormInput
                      labelText='Password'
                      id='email'
                      type='text'
                      stateVar={password}
                      setStateVar={setPassword}
                      required={true}
                      isSafe={false}
                      placeholder={'I promise we encrypt this'}
                      validationObject={validationObject}
                    setValidationObject={setValidationObject}
                    />

                    {newUser &&
                        <FormInput
                            labelText='Confirm Password'
                            id='email'
                            type='text'
                            stateVar={confirmPassword}
                            setStateVar={setConfirmPassword}
                            required={true}
                            isSafe={false}
                            placeholder={`Remember 2 seconds ago?`}
                            validationObject={validationObject}
                            setValidationObject={setValidationObject}
                        />
                    }

                <div className="error-area">
                    {databaseErrors && databaseErrors.map(error => (
                        <div className="database-errors" key={error}>{error}</div>
                        ))}
                </div>
        </div>
                <input type='submit' disabled={Object.values(validationObject).includes(false)} value='Submit' />
        </form>

      </div>
  );
};

export default SignInRegisterCombo;
