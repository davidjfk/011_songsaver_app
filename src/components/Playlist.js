import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

const Playlist = () => {

    // 2do: after completing the sort- and -filter functionality, replace the  mock data below (array playlist with songs) 
    // with the playlist from the useSelector from the redux-toolkit store.: 
    const { playlist } = useSelector((state) => state.playlist);
    console.log('state.playlist:')
    console.log(playlist)
   
    // const playlist = [
    //     {
    //         id:5, 
    //         title: "Doe Maar", 
    //         artist:"foo1", 
    //         genre:"pop", 
    //         rating: 12 
    //     }, 
    //     {
    //         id:6, 
    //         title: "Rolling Stones", 
    //         artist:"bar", 
    //         genre:"reggae", 
    //         rating: 3 
    //     }, 
    //     {
    //         id:7, 
    //         title: "Queen", 
    //         artist:"golf", 
    //         genre:"blues", 
    //         rating: 9 
    //     },
    //     {
    //         id:8, 
    //         title: "ACDC", 
    //         artist:"lima", 
    //         genre:"pop", 
    //         rating: 2 
    //     }
    // ];


        // goal: put the array with movie objects in state. I want this to be local state in Playlist.js
        const [sortedMoviesInState, setSortedMoviesInState] = useState([]);
        // source: smart component, business logic

        // goal: put the criterium in state, with which to sort the array with objects. 
        //I want this to be local state in Playlist.js
        const [songObjectKeyToSortArrayWithSongs, setSongObjectKeyToSortArrayWithSongs] = useState('albums');
        console.log(songObjectKeyToSortArrayWithSongs)



        
        useEffect(() => {
            const sortArray = JsxSelectBoxOptionValue => {
                if (!JsxSelectBoxOptionValue) {
                    return setSortedMoviesInState(playlist);;
                }  
                /*
                A JsxSelectBoxOptionValue always contains 2 parts: 
                First part is a song object type (e.g. title, artist, genre or rating)
                Second part is either ascending or descending order.
                First and second part must be separated by a space.
                */
                
                let typeAsArray = JsxSelectBoxOptionValue.split(' ');
                let songObjectKey = typeAsArray[0];
                let isAscending = typeAsArray[1] === "ascending" ? true : false;

                console.log('hi')
                const types = {
                    title: 'title',
                    artist: 'artist',
                    genre: 'genre',
                    // sorting by genre not a winc-assignment-requirement, but I may just as well add genre too.
                    rating: 'rating',
                };
                const sortProperty = types[songObjectKey];

                console.log(`sortProperty: ${sortProperty}`)
                console.log(`datatype of sortProperty: ${typeof(sortProperty)}`)
                
                //I need to sort strings (songs, artist) and  int (stars).
                let sortedMovies;
                if (!isAscending && sortProperty === "rating" || sortProperty === "")  {
                    sortedMovies = [...playlist].sort((song1, song2) => song2[sortProperty] - song1[sortProperty]);
                    console.log(sortedMovies)
                    setSortedMoviesInState(sortedMovies);
                    // numbers sort descending by default, so the !isAscending causes the rating to display in an ascending fashion. 
                } else if (isAscending && sortProperty === "rating" || sortProperty === "")  {
                    sortedMovies = [...playlist].sort((song1, song2) => song2[sortProperty] - song1[sortProperty]);
                    console.log(sortedMovies)
                    setSortedMoviesInState(sortedMovies.reverse());
                } else if (isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
                    console.log('foo bar')
                    sortedMovies = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
                    console.log(sortedMovies)
                    setSortedMoviesInState(sortedMovies);
                    // I choose 'en' as  the unicodeLanguage.
                } else if (!isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
                        console.log('foo bar')
                        sortedMovies = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
                        console.log(sortedMovies)
                        setSortedMoviesInState(sortedMovies.reverse());
                        // I choose 'en' as  the unicodeLanguage.
                } else {
                    console.error(`The sort functionality can only sort string and Number, 
                    but not datatype ${typeof(sortProperty)}. Please investigate. `)
                }
            };

            sortArray(songObjectKeyToSortArrayWithSongs);

        }, [songObjectKeyToSortArrayWithSongs, playlist]); 
        
    return (
    <>
    <Container> 
        <StyledGridPlaylist>
            <Intro>Playlist</Intro>
            <NavigationArea>
                <Button1>
                    <select 
                        onChange={(e) => setSongObjectKeyToSortArrayWithSongs(e.target.value) }                 
                    >                        
                        <option value="" >Sort by:</option>
                        <option value="" >do not sort</option>
                        <option value="title ascending" >Title a-z</option>
                        <option value="title descending" >Title z-a</option>
                        <option value="artist ascending" >Artist a-z</option>
                        <option value="artist descending" >Artist z-a</option>
                        <option value="genre ascending" >Genre a-z</option>
                        <option value="genre descending" >Genre z-a</option>
                        <option value="rating ascending" >Rating 1-5</option>
                        <option value="rating descending" >Rating 5-1</option>
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