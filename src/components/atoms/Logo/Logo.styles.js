
import styled from 'styled-components/macro';

export const StyledLogo = styled.div(({ theme: {breakpoints, up, color, fontSize}}) => `
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;

        img {
            width: 60px;
            ${up(breakpoints.md)} {
                width: 75px;
            }
    
            ${up(breakpoints.lg)} {
                width: 90px;
            }
        }

        span {
            color: ${color.lightGrey};
            font-size: ${fontSize.medium};
            font-weight: 700;
            font-style: italic;
            letter-spacing: 1px;
            text-transform: uppercase;

            ${up(breakpoints.md)} {
                font-size: ${fontSize.base};
                font-weight: 900;
            }
    
            ${up(breakpoints.lg)} {
                font-size: ${fontSize.large};
            }
        }
`);