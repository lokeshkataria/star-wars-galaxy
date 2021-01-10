import loader from '../../../assets/loader.svg';
import { StyledLoader } from './Loader.styles';

const Loader = ({ className }) => {
    return (
        <StyledLoader className={className}>
            <img src={loader} alt="loading"/>
        </StyledLoader>
    )
}
export default Loader;