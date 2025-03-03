import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heuristics: null
};

const heuristicsBarSlice = createSlice({
  name: 'heuristicsBar',
  initialState,
  reducers: {
    heuristicsBarReset: () => initialState,
    heuristicsBarUpdate(state, action) {
      state.heuristics = action.payload;
    }
  }
});

export const {
  heuristicsBarReset,
  heuristicsBarUpdate
} = heuristicsBarSlice.actions;
export default heuristicsBarSlice.reducer;
