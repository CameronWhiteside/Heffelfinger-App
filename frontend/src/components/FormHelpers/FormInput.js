import { useEffect, useState } from 'react'
import './FormInput.css'
import { unsafeInput } from './utils'


const FormInput = ({ labelText, id, type, stateVar, setStateVar, required, maxLength, patternMatch, placeholder, validationObj }) => {

    const updateStateVar = (e) => {
        setStateVar(e.target.value)
    }

    const [inputSafety, setInputSafety] = useState(unsafeInput(stateVar))

    // useEffect(() => {
    //     setInputSafety(unsafeInput(stateVar).isSafe)
    // },[])

    return (
        <>
        <div className='form-input'>
            <input
                id={id}
                type={type}
                value={stateVar}
                required={required}
                onChange={updateStateVar}
                placeholder={placeholder}
                data-hasinput={stateVar.length > 0}
                data-toolong={maxLength && stateVar.length > maxLength}
                data-issafe={inputSafety}
            />
            <label htmlFor={id}>
                {labelText}
            </label>
            <span className='length-counter'>
                {`${((stateVar.length && maxLength) ? `${stateVar.length}/${maxLength}` : '')}`}
            </span>
            </div>
            <div className='error-area'>
                <ul>
                    <li>{}</li>
                </ul>
            </div>
        </>
    )
}

export default FormInput
