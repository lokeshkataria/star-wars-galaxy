import { StyledGridItem } from './GridItem.styles';
import Heading from '../../atoms/Heading/Heading';

const GridItem = ({ data }) => {
  return (
    <StyledGridItem index={data.sortIndex}>
        <Heading tag="h2">{data.name}</Heading>
        <div>
          Population: {data.population}
        </div>
    </StyledGridItem>
  );
}

export default GridItem;
