import styled from 'styled-components/macro';

export const StyledGrid = styled.div(({ theme: { size, breakpoints, up, color }}) => `
    width: 100%;
    .masonry-grid {
        display: flex;
        margin-left: -15px;
        width: 100%;

        ${up(breakpoints.md)} {
            margin-left: -30px; /* gutter size offset */
        }
    }

    .masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }
      
    .masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        background: grey;
        margin-bottom: 30px;
    }
`);
