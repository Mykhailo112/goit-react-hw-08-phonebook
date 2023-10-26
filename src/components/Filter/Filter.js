import { FilterDiv } from './Filter.styled.js';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice.js';
import { useFilterValue } from 'hooks/hooks.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useFilterValue();
  return (
    <FilterDiv>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </FilterDiv>
  );
};
