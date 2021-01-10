import styled from 'styled-components/macro';

export const StyledLoader = styled.div(({ theme: { color, fontSize }}) => `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background: ${color.background}
`);

export const StyledH2 = styled.h1(({ theme: { color, fontSize }}) => `
    font-size: ${fontSize.smallHeading};
    color: ${color.white}
`);