import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

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
    console.log('state.playlist:')
    console.log(playlist)
   
    //2do: replace mock data 'movies' by data in 'playlist' from the redux-toolkit store. 
    const movies = [
        {
          id: 1,
          name: 'Matrix',
          country: 9,
          collection: 300, //in CRs
          releasedOn: 1999,
        },
        {
          id: 2,
          name: 'Tere Nam',
          country: 3,
          collection: 101,
          releasedOn: 2004,
        },
        {
          id: 3,
          name: 'Bahubali',
          country: 4,
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

            const types = {
                country: 'country',
                collection: 'collection',
                releasedOn: 'releasedOn',
            };
            const sortProperty = types[type];

            /*
            I need to sort strings (songs, artist) and  int (stars).
            Use if (typeof(sortProperty) === String) {

            } else if (typeof(sortProperty) === Number) {

            } else {
                console.error(`The sort functionality can only sort string and Number, 
                but not {typeof(sortProperty}. Please investigate. `)
            }
            */
            const sortedMovies = [...movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
            /*2do: sort strings (i.e. songs, artist) as well. I reuse my code from winc assignment
            'Big Arrays' for this task. */

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
                        <option value="country">Country</option>
                        <option value="collection">Collection</option>
                        <option value="releasedOn">Release Date</option>
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