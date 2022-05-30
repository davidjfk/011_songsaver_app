import React from 'react'
import { StyledSongInPlaylist } from './styles/SongInPlaylist.styled'
import {Row, Column} from './styles/Grid.styled'
const SongInPlaylist = ({item}) => {
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
      <h1>{item.rating}</h1>
      </Column>
    </Row>
  )
}

export default SongInPlaylist