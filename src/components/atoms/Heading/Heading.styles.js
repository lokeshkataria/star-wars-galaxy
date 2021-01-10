import styled from 'styled-components/macro';

export const StyledH1 = styled.h1(({ theme: { color, fontSize }}) => `
    font-size: ${fontSize.mediumHeading};
    color: ${color.white};
    margin-bottom: 48px;
`);

export const StyledH2 = styled.h2(({ theme: { color, fontSize }}) => `
    font-size: ${fontSize.smallHeading};
    color: ${color.white}
`);