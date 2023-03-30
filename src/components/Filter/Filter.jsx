import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilterValue } from 'redux/filterSlice';

import { FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  return (
    <label>
      <FilterInput
        name="filter"
        type="text"
        value={filterValue}
        onChange={filterInputValue =>
          dispatch(setFilter(filterInputValue.currentTarget.value))
        }
      />
    </label>
  );
};
