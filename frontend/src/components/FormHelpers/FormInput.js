import './FormInput.css'

const FormInput = ({ labelText, id, type, stateVar, updateStateVar, required, maxLength, patternMatch, placeholder }) => {
    return (
        <div className='form-input'>
            <input
                id={id}
                type={type}
                value={stateVar}
                required={required}
                onChange={updateStateVar}
                placeholder={placeholder}
                data-empty={stateVar.length > 0}
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
