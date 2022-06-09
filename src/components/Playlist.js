import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

const Playlist = () => {


    // const { playlist } = useSelector((state) => state.playlist);
    // console.log('state.playlist:')
    // console.log(playlist)
   
    const playlist = [
        {
            id:5, 
            title: "g", 
            artist:"foo1", 
            genre:"pop", 
            rating: 18 
        }, 
        {
            id:6, 
            title: "s", 
            artist:"bar", 
            genre:"reggae", 
            rating: 3 
        }, 
        {
            id:7, 
            title: "m", 
            artist:"golf", 
            genre:"blues", 
            rating: 9 
        }
    ];




    //2do: replace mock data 'movies' by data in 'playlist' from the redux-toolkit store. 
    const movies = [
        {
          id: 1,
          name: 'Matrix',
          rating: 9,
          collection: 300, //in CRs
          releasedOn: 1999,
        },
        {
          id: 2,
          name: 'Tere Nam',
          rating: 3,
          collection: 101,
          releasedOn: 2004,
        },
        {
          id: 3,
          name: 'Bahubali',
          rating: 4,
          collection: 500,
          releasedOn: 1987,
        },
      ];


        // goal: put the array with movie objects in state. I want this to be local state in Playlist.js
        const [sortedMoviesInState, setSortedMoviesInState] = useState([]);
        // source: smart component, business logic

        // goal: put the criterium in state, with which to sort the array with objects. 
        //I want this to be local state in Playlist.js
        const [songObjectKeyToSortArrayWithSongs, setSongObjectKeyToSortArrayWithSongs] = useState('albums');
        // source: inverse dataflow from jsx.

        useEffect(() => {
            const sortArray = type => {
            
            if (!type) {
                return setSortedMoviesInState(playlist);;
            }  
            console.log('hi')
            const types = {
                title: 'title',
                artist: 'artist',
                genre: 'genre',
                rating: 'rating',
            };
            const sortProperty = types[type];
            console.log(sortProperty)
            /*
            I need to sort strings (songs, artist) and  int (stars).
            Use if (typeof(sortProperty) === String) {

            } else if (typeof(sortProperty) === Number) {

            } else {
                console.error(`The sort functionality can only sort string and Number, 
                but not {typeof(sortProperty}. Please investigate. `)
            }
            */
            const sortedMovies = [...playlist].sort((a, b) => b[sortProperty] - a[sortProperty]);
            /*2do: sort strings (i.e. songs, artist) as well. I reuse my code from winc assignment
            'Big Arrays' for this task. */
            console.log(sortedMovies)
            setSortedMoviesInState(sortedMovies);
            };

            sortArray(songObjectKeyToSortArrayWithSongs);

        }, [songObjectKeyToSortArrayWithSongs]); 

    return (
    <>
    <Container> 
        <StyledGridPlaylist>
            <Intro>Playlist</Intro>
            <NavigationArea>
                <Button1>
                    <select onChange={(e) => setSongObjectKeyToSortArrayWithSongs(e.target.value)}> 
                        
                        <option value="">Sort by:</option>
                        <option value="">do not sort</option>
                        <option value="title">Title</option>
                        <option value="artist">Artist</option>
                        <option value="genre">Genre</option>
                        <option value="rating">Rating</option>
                    </select>
                </Button1>
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
                {sortedMoviesInState.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                ))}
            </StyledPlaylistArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default Playlist