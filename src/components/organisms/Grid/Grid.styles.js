import styled from 'styled-components/macro';

export const StyledGrid = styled.form(({ theme: { size, breakpoints, up, color }}) => `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`);
