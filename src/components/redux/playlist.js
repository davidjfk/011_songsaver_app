import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlist: []
  },
  reducers: {
    addSongToPlaylist: (state, action) => {
      const id = Math.floor(Math.random() * 100000) + 1;
      const {title, artist, genre, rating} = action.payload
      const newSongOnPlaylist = {id, title, artist, genre, rating};
      state.playlist.push(newSongOnPlaylist);
    },
    deleteSongFromPlaylist: (state, action) => {
      // console.log('delete', action.payload)
      const indexOfSongToDelete = state.playlist.findIndex(songToDelete => {
        return songToDelete.id === action.payload;
      });
      // console.log(indexOfSongToDelete)
      state.playlist.splice(indexOfSongToDelete, 1)
    }}
})
// Action creators are generated for each case reducer function
export const { addSongToPlaylist, deleteSongFromPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;    

