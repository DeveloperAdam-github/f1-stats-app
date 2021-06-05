import { configureStore } from '@reduxjs/toolkit';
import circuitReducer from '../features/circuitSlice';

export default configureStore({
  reducer: {
    circuit: circuitReducer,
  },
});
