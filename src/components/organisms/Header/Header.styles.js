
import styled from 'styled-components/macro';

export const StyledHeader = styled.header(({ theme: { size, breakpoints, up, color }}) => `
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px ${size.contentPadding.mobile};
        color: ${color.secondary};
        ${up(breakpoints.md)} {
            padding: 12px ${size.contentPadding.tablet};
        }

        ${up(breakpoints.lg)} {
            padding: 16px ${size.contentPadding.desktop};
        }
`);

export const StyledName = styled.div(({ theme: { breakpoints, up, color, fontSize }}) => `
    font-weight: bold;
    color: ${color.lightGrey};
    text-transform: uppercase;
    font-size: ${fontSize.smaller};
    flex: 1;

    ${up(breakpoints.md)} {
        font-size: ${fontSize.medium};
    }

`);

