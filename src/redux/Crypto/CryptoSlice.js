import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    // You can add specific reducers here when needed
  },
});

export default cryptoSlice.reducer;
