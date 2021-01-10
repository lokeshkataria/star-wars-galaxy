import { StyledSearchPage } from './Search.styles';
import Heading from '../../atoms/Heading/Heading';
import Loader from '../../atoms/Loader/Loader';
import { useSelector } from 'react-redux';
import SearchForm from '../../organisms/SearchForm/SearchForm';

const SearchPage = () => {
    const planets = useSelector((state) => state.planets);
  return (
    <StyledSearchPage>
        <Heading tag="h1">
            Search Planet
        </Heading>
        <SearchForm />
        {
            planets.loading ? <Loader /> : (
                <>
                {
                    planets.list.map(planet => planet.name)
                }
                </>
            )
        }
    </StyledSearchPage>
  );
}

export default SearchPage;
