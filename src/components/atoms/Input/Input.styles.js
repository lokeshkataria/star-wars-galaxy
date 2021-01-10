import styled from 'styled-components/macro';

export const StyledInput = styled.div(({ theme: { fontSize, color }}) => `
    color: ${color.secondary};
    display: flex;
    flex-direction: column;
    label {
        font-size: ${fontSize.medium};
        paddin-bottom: 8px;  
    }
    
    input {
        border: 0;
        color: inherit;
        border-bottom: 1px solid #cccccc;
        background: transparent;
        padding: 10px 0;
        font-size: ${fontSize.large};

        &:focus {
            outline: none;
        }
    }

    input[type="submit"] {
        border: none;
        background: ${color.primary};
        border-radius: 5px;
        padding: 16px;
        color: ${color.background};
        font-size: ${fontSize.base};
        cursor: pointer;
    }
`);