import { StyledHeader, StyledName } from './Header.styles';
import Logo from '../../atoms/Logo/Logo';
import Logout from '../../atoms/Logout/Logout';

const Header = ({user}) => {
    const { isLoggedIn } = user;
    return (
        <StyledHeader>
            {
                isLoggedIn ? <StyledName>{user.name}</StyledName> : ''
            }
            <Logo />
            {
                isLoggedIn ? <Logout /> : ''
            } 
        </StyledHeader>
    );
}

export default Header;