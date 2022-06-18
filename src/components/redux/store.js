import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import playlistReducer from "./playlist";
import categorizeSongReducer from "./categorizeSong";

export default configureStore({
  reducer: {
    counter: counterReducer,
    playlist: playlistReducer,
    categorizeSong: categorizeSongReducer

  }
});