
export const Input = ({
    field,
    label,
    value,
    onChangedHandler,
    type,
    ShowErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea
}) => {

    const handleValueChange = (event) => {
        onChangedHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div> className = "auth-from-label"
                <span>{label}</span>
            </div>
            <div>
                {textArea ? (
                    <textarea
                        type = {type}
                        value = {value}
                        onChange = {handleValueChange}
                        onBlur = {handleInputBlur}
                        rows = {5}
                        style = {{maxWidth: '400px'}}
                    />
                ) : (
                    <input
                        type = {type}
                        value = {value}
                        onChange = {handleValueChange}
                        onBlur = {handleInputBlur}
                    />
                ) }
                <span className="auth-form-validation-message">
                        {ShowErrorMessage && validationMessage}
                </span>
            </div>
        </>
    )
}