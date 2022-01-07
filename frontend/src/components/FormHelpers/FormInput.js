
import { useEffect } from 'react'
import './FormInput.css'
import { unsafeInput, okToSubmitField } from './utils'
import { useFormValidation } from './FormValidationContext'



const FormInput = (

    {
        labelText,
        id,
        type,
        stateVar,
        setStateVar,
        required,
        minLength,
        maxLength,
        placeholder,
        patternMatch,
        additionalValidationArr,
        validationObject,
        setValidationObject
    }

) => {

    const acceptSuggestion = (suggestion) => setStateVar(suggestion)
    const updateStateVar = (e) => setStateVar(e.target.value)
    let { isSafe, warningText, suggestion } = unsafeInput(stateVar, id, maxLength)
    if (type === 'textarea' && warningText) {
        warningText = 'Input includes forbidden characters (<>$#)'
    }

    let newErrors

    useEffect(() => {
        newErrors = {...validationObject}
    }, [validationObject, stateVar])

    useEffect(() => {


        const isValid = okToSubmitField(stateVar, minLength, maxLength, required, patternMatch, additionalValidationArr)
        // console.log(`New errors before are ${ Object.entries(newErrors) }`)
        newErrors[id] = isValid && isSafe
        // console.log(`NewErrors after are ${ Object.entries(newErrors)}`)
        setValidationObject({ ...newErrors })
        // console.log({ validationObject })
    },
        [stateVar]
    )


        return (
            <>
                <div className='form-input'>
                    {type === 'textarea' &&
                        <textarea className='textarea'
                            id={id}
                            value={stateVar}
                            required={required}
                            onChange={updateStateVar}
                            placeholder={placeholder}
                            data-hasinput={stateVar.length > 0}
                            data-toolong={maxLength && stateVar.length > maxLength}
                            data-issafe={isSafe}
                        ></textarea>
                    }

                    {type !== 'textarea' &&
                        <input
                        id={id}
                        type={type}
                        value={stateVar}
                        required={required}
                        onChange={updateStateVar}
                        placeholder={placeholder}
                        data-hasinput={stateVar.length > 0}
                        data-toolong={maxLength && stateVar.length > maxLength}
                        data-issafe={isSafe}
                    />
                    }
                <label htmlFor={id}>
                    {labelText}
                </label>
                <span className='length-counter'>
                    {`${((stateVar.length && maxLength) ? `${stateVar.length}/${maxLength}` : '')}`}
                </span>
                <div className='error-area'>
                        {warningText && <div>{warningText}
                            {type !== 'textarea' && <span
                                className='suggestion'
                                onClick={() => acceptSuggestion(suggestion)}
                                value={suggestion}
                            >
                                {suggestion}
                            </span>}
                        </div>}
                </div>
                </div>
            </>
        )
    }



export default FormInput
