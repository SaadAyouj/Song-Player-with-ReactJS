import SongCard from "../../SongCard/SongCard.component";
import "./sidebar.style.css";
import { ISongs } from "../../../types/ISongs";

function SideBar({
  songs,
  setPlayedSong,
  playedId,
}: {
  songs: any;
  setPlayedSong: any;
  playedId: number;
}) {
  const setSong = (song: any) => {
    setPlayedSong(song);
  };
  return (
    <div className="sidebar">
      <h2 className="title-sidebar">Library</h2>
      <div className="sideBar_songs">
        {songs.map((song: ISongs) => {
          return (
            <SongCard
              song={song}
              key={song.id}
              setSong={setSong}
              active={playedId === parseInt(song.id, 10)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
