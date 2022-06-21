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
          <StyledSongInPlaylist>
            {item.title}
          </StyledSongInPlaylist>
        </Column>
        <Column>
          <StyledSongInPlaylist>
            {item.artist}
          </StyledSongInPlaylist>
        </Column>
        <Column>
          <StyledSongInPlaylist>
            {item.genre}
          </StyledSongInPlaylist>
        </Column>
        <Column>
          <StyledSongInPlaylist>
            {item.rating}
            <StyledFaTimes>
              <FaTimes onClick={() => dispatch(deleteSongFromPlaylist(item.id))} />
            </StyledFaTimes>
            </StyledSongInPlaylist>
        </Column>
    </Row>
  )
}

export default SongInPlaylist