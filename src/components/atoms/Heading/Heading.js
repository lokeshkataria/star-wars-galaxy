import { StyledH1, StyledH2 } from './Heading.styles';

const Heading = ({ tag, headingText, children, ...attributes }) => {
    const components = {
        h1: StyledH1,
        h2: StyledH2
    };
    const StyledTag = components[tag];
    return <>
        {
            tag ? (
                <StyledTag {...attributes}>
                    {headingText || children}
                </StyledTag>
            ) : ''
        }
    </>
};

export default Heading;