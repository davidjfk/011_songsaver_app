import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import { addSongCounter, deleteSongCounter, addSongObject } from "./redux/song";
import ".././styles.css";

export default function ReduxExperiment() {
  const { count } = useSelector((state) => state.counter);
  const { song } = useSelector((state) => state.song);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Increment by 33
      </button>
      <h1> The song is: {count}</h1>
      {console.dir(song)}
        <button onClick={() => dispatch(addSongCounter())}>addSong</button>
        <button onClick={() => dispatch(deleteSongCounter())}>deleteSong</button>
        <button onClick={() => dispatch(addSongObject({'foo':'bar'}))}>
          {/*  click on application page 'About' on button 'Add user object' 
          adds this hardcoded object {'foo':'bar'}
          to array state.song inside reducer 'song'. This is  visible in Redux dev tools. 
          So proof of concept is ready. 
          After git commit, I will use this in component AddSong.js to replace useState 
          by redux-toolkit, and  later on another feature branche, to delete a song from 
          a playlist.  */}
          Add user object
      </button>
    </div>
  );
} 