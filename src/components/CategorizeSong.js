import React from 'react'
import Playlist from './Playlist.js'

const CategorizeSong = () => {
    const songCategories = ['blues', 'jazz', 'motown', 'pop', 'reggae', 'songs without genre'];
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