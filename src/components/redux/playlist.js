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
      const indexOfSongToDelete = state.playlist.findIndex(songToDelete => {
        return songToDelete.id === action.payload;
      });
      state.playlist.splice(indexOfSongToDelete, 1)
    }}
})
export const { addSongToPlaylist, deleteSongFromPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;    

