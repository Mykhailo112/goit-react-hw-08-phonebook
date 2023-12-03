import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts, selectFilter } from 'redux/filter/filtersSlice';
import { useId } from 'react';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId}>Find contacts by name</label>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={filter}
          onChange={e => dispatch(filteredContacts(e.currentTarget.value))}
          id={inputId}
        />
      </div>
    </>
  );
}
