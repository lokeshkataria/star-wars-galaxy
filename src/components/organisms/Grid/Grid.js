import { StyledGrid } from './Grid.styles';
import GridItem from '../../molecules/GridItem/GridItem';

const Grid= ({ listData }) => {
    const newList = listData.
        .map((item, index) => {...item, index: index})
        .sort((a,b) => +a.population > +b.population)
        .map((item, index) => {...item, sortIndex: index})
        .sort((a,b) => +a.index < +b.index);
  return (
    <StyledGrid onSubmit={handleSubmit(onSubmit)}>
        {
            newList.map(data => <GridItem data={data}/>)
        }
    </StyledGrid>
  );
}

export default Grid;