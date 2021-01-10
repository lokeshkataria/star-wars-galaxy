import styled from 'styled-components/macro';

export const StyledSearchPage = styled.div(({ theme: { size, breakpoints, up, color }}) => `
    padding: 0 ${size.contentPadding.mobile};
    max-width: ${size.contentMaxWidth};
    width: 100%;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${up(breakpoints.md)} {
        padding: 0;
    }
`);