import React from 'react'
import {Container} from './styles/Container.styled'
import {StyledGridAddSong} from './styles/GridAddSong.styled'
import {Column, Intro, Form} from './styles/GridAddSong.styled'
import {StyledButton} from './styles/Button.styled'
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "./redux/playlist";

import { useState } from 'react'

const AddSong = () => {
    const [title, setSongTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState("default")
    const [rating, setRating] = useState("default")
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!title || !artist) {
          alert('Please add a song title and artist')
          return
        }   
        // songsaver-user does not always know genre and nor rating, so fields can optionally be left blank.

        // console.log(`songTitle: ${title}`)
        // console.log(artist)
        // console.log(genre)
        // console.log(rating)
        dispatch(addSongToPlaylist({ title, artist, genre, rating }));   
        //2do: after finishing project, activate following 4 lines of code:
        // setSongTitle('')
        // setArtist('')
        // setGenre('default')
        // setRating('default')
      }

  return (
    <Container> 
        <StyledGridAddSong>
            <Intro>Add Song</Intro>
            <Form>
                <Column>
                    <input  
                        type='text'
                        placeholder='Add Song Title'
                        value={title}
                        onChange={(e) => setSongTitle(e.target.value)}
                        style={{fontSize: "1.6rem"}}                        
                    />
                </Column>
                <Column>
                    <input
                            type='text'
                            placeholder='Add artist'
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                            style={{fontSize: "1.6rem"}}  
                        />
                </Column>
                <Column>
                    <select 
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        name="genre"
                        style={{fontSize: "1.6rem"}}  
                    > 
                        <option value="default" disabled hidden>
                            genre
                        </option>
                        <option value="blues">Blues</option>
                        <option value="jazz">Jazz</option>
                        <option value="motown">Motown</option>
                        <option value="pop">Pop</option>
                        <option value="reggae">Reggae</option>
                    </select>
                </Column>
                <Column>
                    <select 
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        name="rating"
                        style={{fontSize: "1.6rem"}}  
                    > 
                        <option value="default" disabled hidden>
                            song rating
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </Column>
                <Column>
                    <StyledButton onClick={onSubmit}>
                        Add Song 
                    </StyledButton>                  
                </Column>
            </Form>
        </StyledGridAddSong>  
    </Container>
  )
}

export default AddSong 