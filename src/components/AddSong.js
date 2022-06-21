import React from 'react'
import {Container} from './styles/Container.styled'
import {StyledGridAddSong} from './styles/GridAddSong.styled'
import {Column, Intro, Form} from './styles/GridAddSong.styled'
import {StyledButton} from './styles/Button.styled'
import {StyledInputfield} from './styles/Inputfield.styled'
import {StyledSelectbox} from './styles/Selectbox.styled'
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "./redux/playlist";
import { useState } from 'react'


const AddSong = () => {
    const [title, setSongTitle] = useState('')
    const [artist, setArtist] = useState('')
    let [genre, setGenre] = useState("default")
    let [rating, setRating] = useState("default")
    const dispatch = useDispatch();



    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!title || !artist) {
          alert('Please add a song title and artist')
          return
        }   
        // songsaver-user does not always know genre and nor rating, so fields can optionally be left blank.

        console.log(`songTitle: ${title}`)
        console.log(artist)
        console.log(genre)

        /* 
        if user does not fill out a genre, then automatically the genre becomes 'song without genre'.  
        Genre 'song without genre' is the name of its own playlist.  
        Otherwise a playlist with title and genre 'default' would render, but tot the user it is unclear what
        'default' means. In general default means: no selection in the select box has been made.
        */
        if (genre === 'default') {
            setGenre(genre = 'song without genre') 
        } 

        if (rating === 'default') {
            setGenre(rating = 'song without rating') 
        } 

        console.log(rating)
        dispatch(addSongToPlaylist({ title, artist, genre, rating }));   
        // Each combination of song, artist, genre and rating is completely different, so I reset the AddSong form after each use:
        setSongTitle('')
        setArtist('')
        setGenre('default')
        setRating('default')
      }

  return (
    <Container> 
        <StyledGridAddSong>
            <Intro>Add Song</Intro>
            <Form>
                <Column>
                    <StyledInputfield
                            type='text'
                            placeholder='Add Song Title'
                            value={title}
                            onChange={(e) => setSongTitle(e.target.value)}                              
                    />
                </Column>
                <Column>
                    <StyledInputfield
                            type='text'
                            placeholder='Add artist'
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)} 
                        />
                </Column>
                <Column>
                    <StyledSelectbox 
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        name="genre"
                    > 
                        <option value="default" disabled hidden>
                            genre
                        </option>
                        <option value="blues">Blues</option>
                        <option value="jazz">Jazz</option>
                        <option value="motown">Motown</option>
                        <option value="pop">Pop</option>
                        <option value="reggae">Reggae</option>
                        <option value="song without genre">no genre</option>
                    </StyledSelectbox>
                </Column>
                <Column>
                    <StyledSelectbox 
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        name="rating"
                    > 
                        <option value="default" disabled hidden>
                            song rating
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </StyledSelectbox>
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