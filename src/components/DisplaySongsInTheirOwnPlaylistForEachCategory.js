import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addShowAllGenresInOnePlaylist } from "./redux/categorizeSong";

const DisplaySongsInTheirOwnPlaylistForEachCategory = () => {
    
    const {isShowAllGenresInOnePlaylist} = useSelector((state) => state.categorizeSong);
    console.log(isShowAllGenresInOnePlaylist)
    console.log(`isShowAllGenresInOnePlaylist:${isShowAllGenresInOnePlaylist}`)
    /*
       the array playlist.js is filtered with the categories inside component 'Playlist.js'. Reason: the categorize
       sort, and filter functionality are all part of the same pipeline inside the same useEffect hook (inside 
       component Playlist.js)
    */
    const dispatch = useDispatch();
    let mockTempVar1 = {"foo":"bar"}
    // dispatch(addCategoryToFilterPlaylist({ mockTempVar1 })); 
 
    // use redux-toolkit slice instead (see code in progress right above). 
    //const [genresToCategorizeWith, setCategoryToFilterWith] = useState([""]);
    const handleCategorizeByGenreChange = (event) => {    
        console.log(`fn handleCategorizeByGenreChange: ${event.target.value}`)
        // setCategoryToFilterWith(event.target.value);
        // 2do: put in redux-toolkit slice instead.
        /* 
        add a switch statement: each option in the select box 'categorize song' is one 
        case statement in the switch statement. 
        Each option sets 2 pieces of state in the redux-toolkit slice:
        1) isShowAllGenresInOnePlaylist
        2) addCategoryToFilterPlaylist  (2do: cange this, because the actual name will be different)

        */ 

        let categorizeByGenre = event.target.value;

        switch (categorizeByGenre) {
        case 'show_all_genres_in_one_playlist':
            dispatch(addShowAllGenresInOnePlaylist(true)); 
            //dispatch(addCategoryToFilterPlaylist([mockTempVar1 ])); 
            break;
        case 'show_all_genres_with_each_genre_in_its_own_playlist':
            dispatch(addShowAllGenresInOnePlaylist(false)); 
            
            break;
        // case 'blues':
        //     dispatch(addShowAllGenresInOnePlaylist(false)); 
        //     break;
        // case 'jazz':
        //     dispatch(addShowAllGenresInOnePlaylist(false)); 
        //     break;
        // case 'motown':
        //     dispatch(addShowAllGenresInOnePlaylist(false)); 
        //     break;
        // case 'pop':
        //     dispatch(addShowAllGenresInOnePlaylist(false)); 
        //     break;
        // case 'reggae':
        //     dispatch(addShowAllGenresInOnePlaylist(false)); 
        //     break;
        default:
            console.error(`This is not a valid category: ${categorizeByGenre}`);
        }


    
    };
    
    

    //2do: put state values of select box 'categorize songs by genre, so each song ends up in its own playlist, sorted by genre'
    // in the state of useEffect of component Playlist.js 

    return (
    <>
    <Container> 
        <StyledGridPlaylist>
            <Intro>Display songs in their own playlist for each category</Intro>
            <NavigationArea>
                <Button1>
                </Button1>
                <Button2>
                    <select 
                        // multiple={true}
                        value={isShowAllGenresInOnePlaylist}
                        onChange={(event) => handleCategorizeByGenreChange(event)  }                 
                    >                        
                        <option value="" >Categorize by Genre:</option>
                        <option value="show_all_genres_in_one_playlist" >show all genres in 1 playlist</option>                       
                        <option value="show_all_genres_with_each_genre_in_its_own_playlist" >show all genres with each genre in its own playlist</option>
                        {/* <option value="blues" >Blues</option>
                        <option value="jazz" >jazz</option>
                        <option value="motown" >motown</option>
                        <option value="pop" >pop</option>
                        <option value="reggae" >reggae</option> */}
                    </select>
                </Button2>
                <Button3>
                </Button3>
            </NavigationArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default DisplaySongsInTheirOwnPlaylistForEachCategory