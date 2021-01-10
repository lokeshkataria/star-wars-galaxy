import styled from 'styled-components/macro';

export const StyledLogout = styled.div(({ theme: { breakpoints, up, color, fontSize }}) => `
    flex: 1;
    text-align: right;

    button {
        background: transparent;
        color: ${color.primary};
        text-transform: uppercase;
        border: 0;
        border-bottom: 1px solid;
        padding: 10px;
        border-radius: 50%;
        font-size: ${fontSize.small};

        ${up(breakpoints.md)} {
            font-size: ${fontSize.medium};
            padding: 15px;
        }
    }
`);