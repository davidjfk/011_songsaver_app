import React from 'react'
import {Container} from './styles/Container.styled'
import {StyledGridPlaylist} from './styles/GridPlaylist.styled'
import {Intro, FormControlArea, Section1, Section2, Section3} from './styles/GridPlaylist.styled'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addShowAllGenresInOnePlaylist } from "./redux/categorizeSong";
import {StyledSelectbox} from './styles/Selectbox.styled'

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
            <Intro>Categorize songs into 1 or more playlists</Intro>
            <FormControlArea>
                <Section1>
                </Section1>
                <Section2>
                    <StyledSelectbox 
                        value={isShowAllGenresInOnePlaylist}
                        onChange={(event) => handleCategorizeByGenreChange(event)  }                 
                    >                        
                        <option value="" >Categorize by Genre:</option>
                        <option value="show_all_genres_in_one_playlist" >show all genres in 1 playlist</option>                       
                        <option value="show_all_genres_with_each_genre_in_its_own_playlist" >show all genres in their own playlist</option>
                    </StyledSelectbox>
                </Section2>
                <Section3>
                </Section3>
            </FormControlArea>
        </StyledGridPlaylist>  
    </Container>
    </>
  )
}

export default ChooseHowToDisplayTheSongsOfAGenre