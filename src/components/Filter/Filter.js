import {
  FilterStyleLabel,
  FilterStyleDiv,
  IconSearch,
  Input,
  InputWrap,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts, selectFilter } from 'redux/filter/filterSlice';
import { useId } from 'react';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const inputId = useId();

  return (
    <FilterStyleDiv>
      <FilterStyleLabel htmlFor={inputId}>
        Find contacts by name
      </FilterStyleLabel>
      <InputWrap>
        <Input
          type="text"
          placeholder="Name"
          value={filter}
          onChange={e => dispatch(filteredContacts(e.currentTarget.value))}
          id={inputId}
        />
        <IconSearch />
      </InputWrap>
    </FilterStyleDiv>
  );
}
