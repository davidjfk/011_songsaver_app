import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import playlistReducer from "./playlist";
import songReducer from "./song";

export default configureStore({
  reducer: {
    counter: counterReducer,
    playlist: playlistReducer,
    song: songReducer

  }
});