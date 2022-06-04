import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import songReducer from "./song";

export default configureStore({
  reducer: {
    counter: counterReducer,
    song: songReducer
  }
});