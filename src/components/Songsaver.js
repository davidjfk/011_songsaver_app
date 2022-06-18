import AddSong from '../components/AddSong.js'
import Playlist from '../components/Playlist.js'
import CategorizeSong from '../components/CategorizeSong'
import DisplaySongsInTheirOwnPlaylistForEachCategory from '../components/DisplaySongsInTheirOwnPlaylistForEachCategory'
import { useSelector } from "react-redux"; 

function Songsaver() {
  
  const { isShowAllGenresInOnePlaylist } = useSelector((state) => state.categorizeSong);

  return (
    <>
      <AddSong />
      <DisplaySongsInTheirOwnPlaylistForEachCategory />
      {isShowAllGenresInOnePlaylist ? 
        <Playlist genresToCategorizeWith="allCategoriesInOnePlaylist"  /> 
        :
        <CategorizeSong /> 
        // <Playlist genresToCategorizeWith="allCategoriesInOnePlaylist"  /> 
      } 
    </>
  );
}
export default Songsaver;


// CategorizeSong