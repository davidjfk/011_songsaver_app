import React from 'react'
import Playlist from './Playlist.js'
import { useSelector } from "react-redux"; 

const CategorizeSong = () => {
    // const { playlist } = useSelector((state) => state.playlist);
    /* with playlist as input, create an array that contains a playlist for each genre.
    output must look like this:
    const objectWithPlaylists =
    [
        {id, blues: [playlist]},
        {id, jazz: [playlist]},
        {id, motown: [playlist]},
        {id, pop: [playlist]},
        {id, reggae: [playlist]}
    ]
    */   

    // list of songcategories
    const songCategories = ['blues', 'jazz', 'motown', 'pop', 'reggae'];

    // create id for each songcategory, for mapping.
    let createId = () => Math.floor(Math.random() * 100000) + 1;


  return (
    <div>
    {songCategories.map((item, id = createId()) => (
        <Playlist key={id} genresToCategorizeWith={item} />
        ))
    }
    </div>
  )
}




export default CategorizeSong