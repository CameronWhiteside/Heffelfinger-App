
import './FormInput.css'
import { unsafeInput } from './utils'


const FormInput = (
    {
        labelText,
        id,
        type,
        stateVar,
        setStateVar,
        required,
        maxLength,
        placeholder,
        patternMatch,
        validationErrors,
        setValidationErrors
    }

) => {

    const { isSafe, warningText, suggestion } = unsafeInput(stateVar, id, maxLength)
    const updateStateVar = (e) => setStateVar(e.target.value)
    const acceptSuggestion = (suggestion) => setStateVar(suggestion)

    if (stateVar && stateVar.length > maxLength) {
        
    }

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
                data-issafe={isSafe}
                />
            <label htmlFor={id}>
                {labelText}
            </label>
            <span className='length-counter'>
                {`${((stateVar.length && maxLength) ? `${stateVar.length}/${maxLength}` : '')}`}
            </span>
            <div className='error-area'>
                    {warningText && <div>{warningText}
                        <span
                            className='suggestion'
                            onClick={ () => acceptSuggestion(suggestion)}
                            value={suggestion}
                        >
                            {suggestion}
                        </span>
                    </div>}
            </div>
            </div>
        </>
    )
}

export default FormInput
