import { StyledHeader, StyledName } from './Header.styles';
import Logo from '../../atoms/Logo/Logo';
import Logout from '../../atoms/Logout/Logout';

const Header = () => {
    return (
        <StyledHeader>
            <StyledName>Luke Skywalker</StyledName>
            <Logo />
            <Logout />
        </StyledHeader>
    );
}

export default Header;