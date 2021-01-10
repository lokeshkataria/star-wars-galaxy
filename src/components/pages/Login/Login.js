import LoginForm from '../../organisms/LoginForm/LoginForm';
import Heading from '../../atoms/Heading/Heading';
import { StyledLoginPage } from './Login.styles';

const LoginPage = () => {

    return (
        <StyledLoginPage>
            <Heading tag="h1">Login</Heading>
            <LoginForm />
        </StyledLoginPage>
    );
}

export default LoginPage;
