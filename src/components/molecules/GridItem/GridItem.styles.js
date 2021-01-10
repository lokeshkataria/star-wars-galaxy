import styled from 'styled-components/macro';

export const StyledGridItem = styled.div(({ index , theme: { size, breakpoints, up, color }}) => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #fac003;
    height: ${150 + index*30}px;
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 24px;
    width: 100%;
`);
