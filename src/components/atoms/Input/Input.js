import { StyledInput } from './Input.styles';

const Input = ({ labelText, inputId, inputRef, errorMsg, ...attributes }) => (
    <StyledInput>
        {
            labelText ? <label htmlFor={inputId}>{labelText}</label> : ''
        }
        <input id={inputId} ref={inputRef} {...attributes} />
    </StyledInput>
);

export default Input;