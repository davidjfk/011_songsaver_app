import React from 'react'
import SongInPlaylist from './SongInPlaylist.js'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Column, Intro, Headers, NavigationArea, StyledPlaylistArea, Button1, Button2, Button3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addShowAllGenresInOnePlaylist } from "./redux/categorizeSong";

const ChooseHowToDisplayTheSongsOfAGenre = () => {
    
    const {isShowAllGenresInOnePlaylist} = useSelector((state) => state.categorizeSong);
    const dispatch = useDispatch();
    const handleCategorizeByGenreChange = (event) => {    
        console.log(`fn handleCategorizeByGenreChange: ${event.target.value}`)
        let categorizeByGenre = event.target.value;

        switch (categorizeByGenre) {
            case 'show_all_genres_in_one_playlist':
                dispatch(addShowAllGenresInOnePlaylist(true)); 
                break;
            case 'show_all_genres_with_each_genre_in_its_own_playlist':
                dispatch(addShowAllGenresInOnePlaylist(false)); 
                
                break;
            default:
                console.error(`This is not a valid category: ${categorizeByGenre}`);
        }
    };
    
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
                        value={isShowAllGenresInOnePlaylist}
                        onChange={(event) => handleCategorizeByGenreChange(event)  }                 
                    >                        
                        <option value="" >Categorize by Genre:</option>
                        <option value="show_all_genres_in_one_playlist" >show all genres in 1 playlist</option>                       
                        <option value="show_all_genres_with_each_genre_in_its_own_playlist" >show all genres with each genre in its own playlist</option>
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

export default ChooseHowToDisplayTheSongsOfAGenre