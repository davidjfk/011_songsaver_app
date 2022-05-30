import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGrid} from './styles/Grid.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Navigation1, Navigation2, Navigation3} from './styles/Grid.styled'

const Playlist = () => {
    
    const songsMockData = 
        [    
            {
                id: 1, 
                title: "ACDC" ,
                artist: "bla" ,
                genre: "foo",
                rating: 5,
            },
            {
                id: 2, 
                title: "Rolling Stones" ,
                artist: "die" ,
                genre: "bar",
                rating: 5,
            },
            {
                id: 3, 
                title: "Beatles" ,
                artist: "bla" ,
                genre: "foo",
                rating: 5,
            },
            {
                id: 4, 
                title: "Queen" ,
                artist: "die" ,
                genre: "bar",
                rating: 5,
            }
        ];
  
    return (
    <>
    <Container> 
        <StyledGrid>
            <Intro>Playlist</Intro>
            <NavigationArea>
                <Navigation1>a</Navigation1>
                <Navigation2>b</Navigation2>
                <Navigation3>c</Navigation3>
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
                {songsMockData.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                ))}
            </StyledPlaylistArea>
        </StyledGrid>
    </Container>
    </>
  )
}

export default Playlist