import React from 'react'
import { StyledSongInPlaylist } from './styles/SongInPlaylist.styled'
import { StyledFaTimes } from './styles/FaTimes.styled'
import {Row, Column} from './styles/GridPlaylist.styled'
import { useDispatch } from "react-redux";
import { deleteSongFromPlaylist } from "./redux/playlist";
import { FaTimes } from 'react-icons/fa'

const SongInPlaylist = ({item}) => {
  const dispatch = useDispatch();
  return (
    <Row>
      <Column>
      <h1>{item.title}</h1>
      </Column>
      <Column>
      <h1>{item.artist}</h1>
      </Column>
      <Column>
      <h1>{item.genre}</h1>
      </Column>
      <Column>
      <h1>{item.rating} 
        <StyledFaTimes>
          <FaTimes onClick={() => dispatch(deleteSongFromPlaylist(item.id))} />
        </StyledFaTimes></h1>
      </Column>
    </Row>
  )
}

export default SongInPlaylist