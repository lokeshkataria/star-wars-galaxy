import { StyledErrorMSg } from './ErrorMsg.styles';

const ErrorMsg = ({ children }) => (
    <>
    {
        children && <StyledErrorMSg>{children}</StyledErrorMSg>
    }
    </>
);

export default ErrorMsg