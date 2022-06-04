import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: []
  },
  reducers: {
    addSongCounter: (state) => {
      state.song += 1;
      // initial state is now [] to make addSongObject work, so this fn no longer working.
    },
    deleteSongCounter: (state) => {
      state.song -= 1;
      // initial state is now [], so this fn no longer working.
    }, 
    addSongObject: (state, action) => {
      console.dir(action.payload)
      // library Immer (default part of react toolkit) makes state mutable, so I can 
      // apply array method 'push' on the current state.
      state.song.push(action.payload);
      // QED: I need to work with action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { addSongCounter, deleteSongCounter, addSongObject} = songSlice.actions;

export default songSlice.reducer;    