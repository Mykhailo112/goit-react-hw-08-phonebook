import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
