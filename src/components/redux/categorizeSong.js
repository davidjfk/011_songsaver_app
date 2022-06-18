import { createSlice } from "@reduxjs/toolkit";

export const categorizeSongSlice = createSlice({
  name: "categorizeSong",
  initialState: {
    categorizeSong: {isShowAllGenresInOnePlaylist: true}
  },
  reducers: {
    // add action for boolean: 'isShowAllGenresInOnePlaylist'.
    addShowAllGenresInOnePlaylist: (state, action) => {
      let betaalInhoud = action.payload
      console.log(`betaalInhoud: ${betaalInhoud}`)
      state.isShowAllGenresInOnePlaylist = action.payload;
      // note to self: do not: state.categorizeSong.isShowAllGenresInOnePlaylist.
    }
  }
});
// Action creators are generated for each case reducer function
export const { addShowAllGenresInOnePlaylist } = categorizeSongSlice.actions;

export default categorizeSongSlice.reducer;    