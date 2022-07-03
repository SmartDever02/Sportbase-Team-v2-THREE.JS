import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PathState {
  path: string;
}

const initialState: PathState = {
  path: '/team',
};

export const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPath } = pathSlice.actions;

export default pathSlice.reducer;
