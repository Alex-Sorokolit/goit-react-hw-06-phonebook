import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
