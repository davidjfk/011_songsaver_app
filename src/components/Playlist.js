import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, FormControlArea, StyledPlaylistArea, Section1, Section2, Section3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import {StyledSelectbox} from './styles/Selectbox.styled'  

const Playlist = ({genresToCategorizeWith}) => {
    
    const { playlist } = useSelector((state) => state.playlist);
    const [songObjectKeyToSortArrayWithSongs, setSongObjectKeyToSortArrayWithSongs] = useState('');
    const [dataToRenderFromUseEffectPipeline, setDataToRenderFromUseEffectPipeline] = useState([]);
    const [genresToFilterWith, setGenreToFilterWith] = useState([""]);
    const [ratingStarsToFilterWith, setRatingStarsToFilterWith] = useState([""]);

    const categorizeByGenre = (playlist, genresToCategorizeWith) => {
            if (genresToCategorizeWith === "All Genres Together In One Playlist") {
              return playlist;
            }
                               
            const filteredGenres = playlist.filter(
                (song) =>          
                song.genre.indexOf(genresToCategorizeWith) !== -1 
            );
            return filteredGenres;
    };


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
            // unicode allows user to enter songs and artists containing any kind of character (acdc,  2pac, ____45_____ , etc. ).
        } else if (!isAscending && (sortProperty === "title" || sortProperty === "artist" || sortProperty === "genre")) {
                sortedSongs = [...playlist].sort((song1, song2) => song1[sortProperty].localeCompare(song2[sortProperty], 'en', { ignorePunctuation: true }));
                return sortedSongs.reverse();
        } else {
            console.error(`component Playlist: not possible to sort with datatype ${typeof(sortProperty)}. Please investigate. `)
        }
    };
        
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
    

    const filterByGenre = (filteredData, genresToFilterWith) => {
        /* 
            I have modified my fn filterObjectsByArrayObjectKey from  winc assignment 'Big Arrays'
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


    useEffect(() => {
            let pipelineData = categorizeByGenre(playlist, genresToCategorizeWith)
            pipelineData = filterByRatingStars(pipelineData, ratingStarsToFilterWith);
            pipelineData = filterByGenre(pipelineData, genresToFilterWith);
            pipelineData = sortPlaylist(pipelineData, songObjectKeyToSortArrayWithSongs);
            setDataToRenderFromUseEffectPipeline(pipelineData);
        }, 
        [genresToCategorizeWith, songObjectKeyToSortArrayWithSongs, ratingStarsToFilterWith, genresToFilterWith, playlist]
    );


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
    <>
    <Container> 
        <StyledGridPlaylist>
            <Intro>{genresToCategorizeWith}</Intro>
            <FormControlArea>
                <Section1>
                    <StyledSelectbox                  
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
                    </StyledSelectbox>
                </Section1>
                <Section2>
                    <div>
                    <StyledSelectbox 
                        multiple={true}
                        onMenuOpen
                        onMenuClose
                        value={genresToFilterWith}
                        onChange={(event) => handleFilterGenreChange(event)  }  
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}               
                    >                        
                        <option value="" >Filter by Genre:</option>
                        <option value="" >do not filter</option>
                        <option value="blues" >Blues</option>
                        <option value="jazz" >jazz</option>
                        <option value="motown" >motown</option>
                        <option value="pop" >pop</option>
                        <option value="reggae" >reggae</option>
                    </StyledSelectbox>
                    {isHovering && <h3>Press Ctrl to select multiple genres</h3>}
                    </div>
                </Section2>
                <Section3>
                    <div>
                    <StyledSelectbox 
                        multiple={true}
                        onMenuOpen
                        value={ratingStarsToFilterWith}
                        onChange={(e) => handleFilterStarsChange(e)  }     
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}                 
                    >                        
                        <option value="" >Filter by Rating:</option>
                        <option value="" >do not filter</option>
                        <option value="1" >1 star</option>
                        <option value="2" >2 stars</option>
                        <option value="3" >3 stars</option>
                        <option value="4" >4 stars</option>
                        <option value="5" >5 stars</option>
                    </StyledSelectbox>
                    {isHovering && <h3>Press Ctrl to select multiple ratings</h3>}
                    </div>
                </Section3>
            </FormControlArea>
            <Headers>
                <Column>
                    <span>Song title</span>
                </Column>
                <Column>
                    <span>Artist</span>
                </Column>
                <Column>
                    <span>Genre</span>
                </Column>
                <Column>
                    <span>Rating</span>
                </Column>
            </Headers>
            <StyledPlaylistArea>
                { dataToRenderFromUseEffectPipeline.length !== 0 ? dataToRenderFromUseEffectPipeline.map((item, id) => (
                        <SongInPlaylist key={id} item={item} />
                )): <>The playlist -- {genresToCategorizeWith} -- is empty. Please add a song.</>}
            </StyledPlaylistArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default Playlist