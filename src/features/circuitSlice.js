import { createSlice } from '@reduxjs/toolkit';

export const circuitSlice = createSlice({
  name: 'circuit',
  initialState: {
    circuit: null,
  },
  reducers: {
    circuit: (state, action) => {
      state.circuits = action.payload;
    },
  },
});

export const { circuit } = circuitSlice.actions;

export default circuitSlice.reducer;
