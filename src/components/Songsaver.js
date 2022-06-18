import AddSong from '../components/AddSong.js'
import Playlist from '../components/Playlist.js'
import CategorizeSong from '../components/CategorizeSong'
import ChooseHowToDisplayTheSongsOfAGenre from '../components/ChooseHowToDisplayTheSongsOfAGenre'
import { useSelector } from "react-redux"; 

function Songsaver() {
  const { isShowAllGenresInOnePlaylist } = useSelector((state) => state.categorizeSong);
  return (
    <>
      <AddSong />
      <ChooseHowToDisplayTheSongsOfAGenre />
      {isShowAllGenresInOnePlaylist ? 
        <Playlist genresToCategorizeWith="All Genres Together In One Playlist"  /> 
        :
        <CategorizeSong /> 
      } 
    </>
  );
}
export default Songsaver;