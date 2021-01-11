import { StyledLogout } from './Logout.styles';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../state/actions';

const Logout = () => {
    const dispatch = useDispatch();
    const clickHandler = () => dispatch(userLogout());
    return (
    <StyledLogout>
        <button onClick={clickHandler}>Logout</button>
    </StyledLogout>
)};

export default Logout;