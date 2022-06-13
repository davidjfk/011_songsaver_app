import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

const Playlist = () => {
    const { playlist } = useSelector((state) => state.playlist);
    const [songObjectKeyToSortArrayWithSongs, setSongObjectKeyToSortArrayWithSongs] = useState('');
    const sortPlaylist = (playlist, JsxSelectBoxAttributeValue) => {
        if (!JsxSelectBoxAttributeValue) {
            return playlist;
        }  
        let JsxSelectBoxAttributeValueAsArray = JsxSelectBoxAttributeValue.split(' ');
        let songObjectKey = JsxSelectBoxAttributeValueAsArray[0];
        let isAscending = JsxSelectBoxAttributeValueAsArray[1] === "ascending" ? true : false;

        const songPropertiesObject = {
            title: 'title',
            artist: 'artist',
            genre: 'genre',
            // 2do: remove genre from  the list after having completed the winc requirement 'categorize on genre' (on a separate feature branch).
            rating: 'rating',
        };
        const sortProperty = songPropertiesObject[songObjectKey];  
        let sortedSongs;
        if (!isAscending && (sortProperty === "rating" || sortProperty === ""))  {
            sortedSongs = [...playlist].sort((song1, song2) => song2[sortProperty] - song1[sortProperty]);
            return sortedSongs;
            // numbers sort descending by default, so the !isAscending causes the rating to display in an ascending fashion. 
        } else if (isAscending && (sortProperty === "rating" || sortProperty === ""))  {
            sortedSongs = [...playlist].sort((song1, song2) => song2[sortProperty] - song1[sortProperty]);
            return sortedSongs.reverse();
        } else if (isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
            sortedSongs = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
            return sortedSongs;
            // I choose 'en' as  the unicodeLanguage.
        } else if (!isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
                sortedSongs = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
                return sortedSongs.reverse();
                // I choose 'en' as  the unicodeLanguage.
        } else {
            console.error(`component Playlist: not possible to sort with datatype ${typeof(sortProperty)}. Please investigate. `)
        }
    };

    const [genresToFilterWith, setGenreToFilterWith] = useState([""]);
    const [ratingStarsToFilterWith, setRatingStarsToFilterWith] = useState([""]);
    const [sortedAndOrFilteredArrayWithSongs, setSortedAndOrFilteredArrayWithSongs] = useState([]);
        
    const handleFilterGenreChange = (event) => {    
        let value = Array.from(
            event.target.selectedOptions, (option) => option.value
        )   
        setGenreToFilterWith(value);
    };
    
    const handleFilterStarsChange = (event) => {
        let value = Array.from(
            event.target.selectedOptions, (option) => option.value
        )   
        setRatingStarsToFilterWith(value);
    };
    
    useEffect(() => {
            const filterByGenre = (filteredData, genresToFilterWith) => {
                /* 
                    I have (severely) modified my fn filterObjectsByArrayObjectKey from  winc assignment 'Big Arrays'
                    ( https://github.com/davidjfk/WincAcademy/tree/master/54-js-webpage-big-arrays-and-objects-David-Sneek )
                    to filter by genre on multiple genres at the same time:
                */
                let arrayFilteredOnAllCriteria = [];              
                if (genresToFilterWith[0] === "" ) {
                    return filteredData;
                }  else {
                    let copyOfFilteredData = [...filteredData];
                    let arrayFilteredOnOneCriterium;
                    
                    for (let filtercriterium of genresToFilterWith) {
                        arrayFilteredOnOneCriterium = copyOfFilteredData.filter(
                            (song) =>           
                            song.genre.indexOf(filtercriterium) !== -1 
                        );
                        arrayFilteredOnAllCriteria.push(...arrayFilteredOnOneCriterium)
                    }
                    return arrayFilteredOnAllCriteria;
                } 
            };

            const filterByRatingStars = (filteredData, ratingStarsToFilterWith) => {
                let arrayFilteredOnAllCriteria = [];  
                if (ratingStarsToFilterWith[0] === "") {
                return filteredData;
                } else {
                    let  copyOfFilteredData = [...filteredData];
                    let arrayFilteredOnOneCriterium;
                    for (let ratingcriterium of ratingStarsToFilterWith) {
                        arrayFilteredOnOneCriterium = copyOfFilteredData.filter(
                            (song) =>           
                            parseInt(song.rating) === parseInt(ratingcriterium)
                        );
                        arrayFilteredOnAllCriteria.push(...arrayFilteredOnOneCriterium)
                    }
                    return arrayFilteredOnAllCriteria;
                }
            };

            /* 
            A user expect the playlist to sort first, then to order on genre and finally to filter on rating, so the precedence
            (user expectation) is from left to right.
            For this reason in the pipeline I filter on rating first, then filter on genre second and finally sort the playlist.
            */
            let pipelineData = filterByRatingStars(playlist, ratingStarsToFilterWith);
            pipelineData = filterByGenre(pipelineData, genresToFilterWith);
            pipelineData = sortPlaylist(pipelineData, songObjectKeyToSortArrayWithSongs);
            setSortedAndOrFilteredArrayWithSongs(pipelineData);

        }, 
        [songObjectKeyToSortArrayWithSongs, ratingStarsToFilterWith, genresToFilterWith, playlist]
    );

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
                <Button2>
                    <select 
                        multiple={true}
                        value={genresToFilterWith}
                        onChange={(event) => handleFilterGenreChange(event)  }                 
                    >                        
                        <option value="" >Filter by Genre:</option>
                        <option value="" >do not filter</option>
                        <option value="blues" >Blues</option>
                        <option value="jazz" >jazz</option>
                        <option value="motown" >motown</option>
                        <option value="pop" >pop</option>
                        <option value="reggae" >reggae</option>
                    </select>

                </Button2>
                <Button3>
                    <select 
                        multiple={true}
                        value={ratingStarsToFilterWith}
                        onChange={(e) => handleFilterStarsChange(e)  }                 
                    >                        
                        <option value="" >Filter by Rating:</option>
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
                {sortedAndOrFilteredArrayWithSongs.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                ))}
            </StyledPlaylistArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default Playlist