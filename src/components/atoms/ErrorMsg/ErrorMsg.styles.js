import styled from 'styled-components/macro';

export const StyledErrorMSg = styled.h1(({ theme: { fontSize, color }}) => `
    color: ${color.error};
    font-size: ${fontSize.small};
`);
