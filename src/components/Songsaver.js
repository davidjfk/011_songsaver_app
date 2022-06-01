import AddSong from '../components/AddSong.js'
import Playlist from '../components/Playlist.js'


import { useState } from 'react'

function Songsaver() {

  const [playlist, setPlaylist] = useState( [] )


  // sample data:
  //   [    
  //     {
  //         id: 1, 
  //         title: "ACDC" ,
  //         artist: "blah" ,
  //         genre: "foo",
  //         rating: 5,
  //     },
  //     {
  //         id: 2, 
  //         title: "Rolling Stones" ,
  //         artist: "die" ,
  //         genre: "bar",
  //         rating: 5,
  //     },
  //     {
  //         id: 3, 
  //         title: "Beatles" ,
  //         artist: "bla" ,
  //         genre: "foo",
  //         rating: 5,
  //     },
  //     {
  //         id: 4, 
  //         title: "Queen" ,
  //         artist: "die" ,
  //         genre: "bar",
  //         rating: 5,
  //     }
  // ]

  const addNewSongToPlaylist = ({title, artist,  genre, rating}) => {
    console.log('click arrived in App.js')
    // console.log(`new song: ${newSong}`)
    console.log(`title: ${title}`)

      const id = Math.floor(Math.random() * 100000) + 1;
      // const newSongOnPlaylist = {id, title, artist, genre, rating };
      
      
      // const newSongOnPlaylist = {id:5, title: "foo", artist:"bar", genre:"yeah", rating:"whoo" };
      const newSongOnPlaylist = {id, title, artist, genre, rating};
     
      const newPlaylist = [...playlist]
      newPlaylist.push(newSongOnPlaylist)

      setPlaylist(newPlaylist);
  }

  

  return (
    <>
      <AddSong onAddNewSong={addNewSongToPlaylist}/>
      <Playlist playlist={playlist}/>
    </>
  );
}

export default Songsaver;