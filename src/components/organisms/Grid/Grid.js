import { StyledGrid } from './Grid.styles';
import GridItem from '../../molecules/GridItem/GridItem';
import Masonry from 'react-masonry-css';

const Grid= ({ listData }) => {
  let newList = listData.map((item, index) => ({...item, index}));
  newList.sort((a,b) => +(a.population) - +(b.population));
  newList = newList.map((item, index) => ({...item, sortIndex: index}));
  newList.sort((a,b) => a.index - b.index);
  return (
    <StyledGrid>
      <Masonry
      breakpointCols={3}
      className="masonry-grid"
      columnClassName="masonry-grid_column">
      {
          newList.map(data => <GridItem data={data} key={data.name}/>)
      }
      </Masonry>
    </StyledGrid>
  );
}

export default Grid;