import styled from 'styled-components/macro';

export const StyledLoginForm = styled.form(({ theme: { size, breakpoints, up, color }}) => `
    display: flex;
    flex-direction: column;
    > * {
        margin-bottom: 32px;
    }
`);
