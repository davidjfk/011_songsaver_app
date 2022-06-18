import { createSlice } from "@reduxjs/toolkit";

export const categorizeSongSlice = createSlice({
  name: "categorizeSong",
  initialState: {
    categorizeSong: {isShowAllGenresInOnePlaylist: true}
  },
  reducers: {
    addShowAllGenresInOnePlaylist: (state, action) => {
      state.isShowAllGenresInOnePlaylist = action.payload;
    }
  }
});
export const { addShowAllGenresInOnePlaylist } = categorizeSongSlice.actions;

export default categorizeSongSlice.reducer;    

