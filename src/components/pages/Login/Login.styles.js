import styled from 'styled-components/macro';

export const StyledLoginPage = styled.div(({ theme: { size, breakpoints, up, color }}) => `
    padding: 0 ${size.contentPadding.mobile};
    max-width: 450px;
    width: 100%;
    margin: 100px auto 0;
    ${up(breakpoints.md)} {
        padding: 0;
        margin-top: 150px;
    }
`);