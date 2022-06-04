import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";

const Playlist = () => {
    // const playlist = [
    //     {
    //         id:5, 
    //         title: "mock data", 
    //         artist:"foo", 
    //         genre:"bar", 
    //         rating: 18 
    //     }
    // ];

    const { playlist } = useSelector((state) => state.playlist);

    console.log(playlist)
   
    return (
    <>
    <Container> 
        <StyledGridPlaylist>
            <Intro>Playlist</Intro>
            <NavigationArea>
                <Button1>a</Button1>
                <Button2>b</Button2>
                <Button3>c</Button3>
            </NavigationArea>
            <Headers>
                <Column>
                    <h1>Song title</h1>
                </Column>
                <Column>
                    <h1>artist</h1>
                </Column>
                <Column>
                    <h1>genre</h1>
                </Column>
                <Column>
                    <h1>rating</h1>
                </Column>
            </Headers>
            <StyledPlaylistArea>
                {playlist.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                ))}
            </StyledPlaylistArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default Playlist