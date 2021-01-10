import logo from '../../../assets/star-wars-logo-small.png';
import { StyledLogo } from './Logo.styles';

const Logo = () => {
    return <StyledLogo>
        <img src={logo} alt="star wars"/>
        <span>Galaxy</span>
    </StyledLogo>
};

export default Logo;