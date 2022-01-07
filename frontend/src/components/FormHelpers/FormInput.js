import './FormInput.css'

const FormInput = ({ labelText, id, type, stateVar, setStateVar, required, maxLength, patternMatch, placeholder, validationObj }) => {

    const updateStateVar = (e) => {
        setStateVar(e.target.value)
    }

    return (
        <div className='form-input'>
            <input
                id={id}
                type={type}
                value={stateVar}
                required={required}
                onChange={updateStateVar}
                placeholder={placeholder}
                maxlength={maxLength}
                data-hasInput={stateVar.length > 0}
                data-tooLong={maxLength && stateVar.length > maxLength}
            />
            <label htmlFor={id}>
                {labelText}
            </label>
            <span className='length-counter'>
                {`${((stateVar.length && maxLength) ? `${stateVar.length}/${maxLength}` : '')}`}
            </span>
        </div>
    )
}

export default FormInput
