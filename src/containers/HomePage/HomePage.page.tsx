import { useState, useEffect, useRef } from "react";
import SideBar from "../../components/Layout/SideBar/SideBar.component.";
import Player from "../../components/Player/Player.component";
import { songsApi } from "../../server/data";
import { ISongs } from "../../types/ISongs";
import "../styles/homepage.styles.css";

function HomePage() {
  const [songs, setSongs] = useState<ISongs[]>([]);
  const [isplaying, setisplaying] = useState(false);
  const [playedSong, setPlayedSong] = useState<any>(null);
  const audioRef: any = useRef();

  useEffect(() => {
    const getSongs = async () => {
      songsApi.then((res: any) => {
        setSongs(res);
        setPlayedSong(res[0]);
      });
    };
    getSongs();
  }, []);

  useEffect(() => {
    if (isplaying) audioRef.current.play();
    else audioRef.current?.pause();
  }, [isplaying]);

  const onPlaying = () => {
    const { duration } = audioRef.current;
    const ct = audioRef.current.currentTime;
    setPlayedSong({
      ...playedSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const restTrack = () => {
    audioRef.current.currentTime = 0;
    setisplaying(false);
  };
  const setPlayedTrack = (song: any) => {
    setPlayedSong(song);
    restTrack();
  };

  const setNextPrevTrack = (id: number) => {
    setPlayedSong({ ...songs[id], progress: 0, length: 0 });
    restTrack();
  };

  return songs.length === 0 || playedSong === null ? (
    <div className="loader-container">
      <div className="spinner"> </div>
    </div>
  ) : (
    <div>
      <div className="column">
        <SideBar
          songs={songs}
          setPlayedSong={setPlayedTrack}
          playedId={parseInt(playedSong.id, 10)}
        />
      </div>
      <div className="double-column">
        <audio src={playedSong.audio} ref={audioRef} onTimeUpdate={onPlaying}>
          <track default kind="captions" />
        </audio>
        <Player
          song={playedSong}
          setisplaying={setisplaying}
          isplaying={isplaying}
          setNextPrevTrack={setNextPrevTrack}
          size={songs.length}
        />
      </div>
    </div>
  );
}

export default HomePage;
