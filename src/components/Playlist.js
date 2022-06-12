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
    // console.log('state.playlist:')
    // console.log(`line 15: ${playlist}`)
   
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
        const [sortedSongsInState, setsortedSongsInState] = useState([]);
        // source: smart component, business logic

        // goal: put the criterium in state, with which to sort the array with objects. 
        //I want this to be local state in Playlist.js
        const [songObjectKeyToSortArrayWithSongs, setSongObjectKeyToSortArrayWithSongs] = useState('');
        // console.log(songObjectKeyToSortArrayWithSongs)

    /*
        useEffect(() => {
                const sortArray = JsxSelectBoxOptionValue => {
                    if (!JsxSelectBoxOptionValue) {
                        return setsortedSongsInState(playlist);;
                    }  
                    
                    // A JsxSelectBoxOptionValue always contains 2 parts: 
                    // First part is a song object type (e.g. title, artist, genre or rating)
                    // Second part is either ascending or descending order.
                    // First and second part must be separated by a space.
                    
                    
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
                    let sortedSongs;
                    if (!isAscending && (sortProperty === "rating" || sortProperty === ""))  {
                        sortedSongs = [...playlist].sort((song1, song2) => song2[sortProperty] - song1[sortProperty]);
                        console.log(sortedSongs)
                        setsortedSongsInState(sortedSongs);
                        // numbers sort descending by default, so the !isAscending causes the rating to display in an ascending fashion. 
                    } else if (isAscending && (sortProperty === "rating" || sortProperty === ""))  {
                        sortedSongs = [...playlist].sort((song1, song2) => song2[sortProperty] - song1[sortProperty]);
                        console.log(sortedSongs)
                        setsortedSongsInState(sortedSongs.reverse());
                    } else if (isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
                        console.log('foo bar')
                        sortedSongs = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
                        console.log(sortedSongs)
                        setsortedSongsInState(sortedSongs);
                        // I choose 'en' as  the unicodeLanguage.
                    } else if (!isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
                            console.log('foo bar')
                            sortedSongs = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
                            console.log(sortedSongs)
                            setsortedSongsInState(sortedSongs.reverse());
                            // I choose 'en' as  the unicodeLanguage.
                    } else {
                        console.error(`component Playlist: not possible to sort with datatype ${typeof(sortProperty)}. Please investigate. `)
                    }
                };

                //2do: switch back on!!
                // sortArray(songObjectKeyToSortArrayWithSongs);

            }, [songObjectKeyToSortArrayWithSongs, playlist]
        ); 

        */






        /*
        }, [songObjectKeyToSortArrayWithSongs, playlist]); 
        causes following bug: 
        dependency 'playlist' causes bug: 'maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have
        a dependency array, or one of the dependencies changes on every render.
        solution instead of code below:
        const [arrayFilteredWithGenresAndRatingStars, setArrayFilteredWithGenresAndRatingStars] = useState(playlist);
        do:
        const [arrayFilteredWithGenresAndRatingStars, setArrayFilteredWithGenresAndRatingStars] = useState();
        */

        const [arrayFilteredWithGenresAndRatingStars, setArrayFilteredWithGenresAndRatingStars] = useState([]);
        const [genresToFilterWith, setGenreToFilterWith] = useState([]);
        const [ratingStarsToFilterWith, setRatingStarsToFilterWith] = useState("");
        
        
        
        
        const handleFilterGenreChange = (event) => {
            
            // console.log(event.target.selectedOptions)
            // analysis: selectedOptions has datatype HTMLCollection 
            let value = Array.from(
                event.target.selectedOptions, (option) => option.value
            )   
            console.log(`line 154: fn handleFilterGenreChange`)
            console.log(value)

            setGenreToFilterWith(value);
        };
        



        const handleFilterStarsChange = (event) => {
            setRatingStarsToFilterWith(event.target.value);
        };
        
        useEffect(() => {
                // vscode wants me to put filterByRatingStars and filterByGenre inside the useEffect. Probably because these  fns are 
                // only used inside this useEffect. But these fns are not state, so why bother? 2do: analyse this (later).  

                const filterByGenre = (filteredData) => {
                    // without a filter return all data.
                    if (!genresToFilterWith ) {
                        console.log('line 174: no filter')
                      return filteredData;
                    }
                                       
                    const filteredGenres = filteredData.filter(
                        (song) => 
                        
                        song.genre.indexOf(genresToFilterWith) !== -1 
                    );
                    return filteredGenres;
                };



                const filterByRatingStars = (filteredData) => {
                    // Avoid filter for null value
                    if (!ratingStarsToFilterWith) {
                    return filteredData;
                    }
                
                    const filteredSongs = filteredData.filter(
                        (song) => song.rating === ratingStarsToFilterWith
                    );
                    return filteredSongs;
                };



                let filteredData = filterByGenre(playlist);
                filteredData = filterByRatingStars(filteredData);
                setArrayFilteredWithGenresAndRatingStars(filteredData);
            }, 
            [genresToFilterWith, ratingStarsToFilterWith, playlist]
        );



        // combined useEffect (experimental)
        // useEffect(() => {
        //     let filteredData = filterByGenre(playlist);
        //     filteredData = filterByRatingStars(filteredData);
        //     setArrayFilteredWithGenresAndRatingStars(filteredData);
        // }, 
        // [sortedSongsInState, arrayFilteredWithGenresAndRatingStars, playlist]
    // );      

    // console.log('line 232')
    // console.log(arrayFilteredWithGenresAndRatingStars)
       

    return (
    <>
    <Container> 
        <StyledGridPlaylist>
            <Intro>Playlist</Intro>
            <NavigationArea>
                <Button1>
                {/* <div>sort playlist</div> */}
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
                <Button2>
                    {/* <div>Filter by genre</div> */}
                    <select 
                        multiple={true}
                        value={genresToFilterWith}
                        onChange={(event) => handleFilterGenreChange(event)  }                 
                    >                        
                        <option value="" >Filter by genre:</option>
                        <option value="" >do not filter</option>
                        <option value="blues" >Blues</option>
                        <option value="jazz" >jazz</option>
                        <option value="motown" >motown</option>
                        <option value="pop" >pop</option>
                        <option value="reggae" >reggae</option>
                    </select>

                </Button2>
                <Button3>
                {/* <div>Filter by rating</div> */}
                    <select 
                        onChange={(e) => handleFilterStarsChange(e)  }                 
                    >                        
                        <option value="" >Filter by rating:</option>
                        <option value="" >do not filter</option>
                        <option value="1" >1 star</option>
                        <option value="2" >2 stars</option>
                        <option value="3" >3 stars</option>
                        <option value="4" >4 stars</option>
                        <option value="5" >5 stars</option>
                    </select>
                </Button3>
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
                {/* {sortedSongsInState.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                ))} */}
                {arrayFilteredWithGenresAndRatingStars.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                ))}
            </StyledPlaylistArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default Playlist