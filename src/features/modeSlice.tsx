import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
  mode: boolean;
}

const initialState: ModeState = {
  mode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    }
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
