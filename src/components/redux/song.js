import { createSlice } from "@reduxjs/toolkit";
//2do: delete this component after having implemented 
//the functionality to delete a song from the playlist.
export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: []
  },
  reducers: {
    addSongToPlaylist: (state, action) => {
      console.dir(action.payload)
      state.song.push(action.payload);
    },
    deleteSongFromPlaylist: (state) => {
    }
  }
});

// Action creators are generated for each case reducer function
export const { deleteSongFromPlaylist, addSongToPlaylist} = songSlice.actions;

export default songSlice.reducer;    