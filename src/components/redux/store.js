import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlist";
import categorizeSongReducer from "./categorizeSong";

export default configureStore({
  reducer: {
    playlist: playlistReducer,
    categorizeSong: categorizeSongReducer
  }
});