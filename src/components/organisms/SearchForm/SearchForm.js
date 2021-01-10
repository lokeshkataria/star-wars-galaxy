import { StyledSearchForm } from './SearchForm.styles';
import Input from '../../atoms/Input/Input';
import ErrorMsg from '../../atoms/ErrorMsg/ErrorMsg';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../../state/actions';

const SearchForm = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(search(e.target.value));
  const planets = useSelector((state) => state.planets);

  return (
    <StyledSearchForm>
        <Input id="search" name="search" placeholder="e.g. Tatooine" onChange={onChange} />
        <div>
          {planets.error && <ErrorMsg>Not able to fetch results. Plese try again.</ErrorMsg>}
        </div>
    </StyledSearchForm>
  );
}

export default SearchForm;