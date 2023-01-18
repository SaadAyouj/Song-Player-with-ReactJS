import "./player.styles.css";
import {
  BsFillPlayFill,
  BsFillPauseCircleFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

function Player({
  song,
  isplaying,
  setisplaying,
  setNextPrevTrack,
  size,
}: {
  song: any;
  isplaying: any;
  setisplaying: any;
  setNextPrevTrack: any;
  size: number;
}) {
  const PlayPause = () => {
    setisplaying(!isplaying);
  };
  return (
    <div className="content">
      <img id="player_Img" src={song.cover} alt="Music" />
      <div>
        <span>{song.artist}</span>
      </div>
      <div>
        <h3>{song.name}</h3>
      </div>
      <div className="nav">
        <span>
          {!Number.isNaN(song?.progress)
            ? (song.progress * 10 ** -2).toFixed(2)
            : "0.00"}
        </span>
        <div className="nav_wp">
          <div className="bar" style={{ width: `${song.progress}%` }} />
        </div>
        <span>
          {!Number.isNaN(song?.length)
            ? (parseFloat(song?.length) * 10 ** -2).toFixed(2)
            : "0.00"}
        </span>
      </div>
      <div>
        <div className="player_ctr">
          <BsChevronLeft
            className="player_btns"
            onClick={() =>
              parseInt(song.id, 10) - 1 !== -1 &&
              setNextPrevTrack(parseInt(song.id, 10) - 1)
            }
            size={20}
          />
          {isplaying ? (
            <BsFillPauseCircleFill
              className="player_btns pp"
              onClick={PlayPause}
            />
          ) : (
            <BsFillPlayFill className="player_btns pp" onClick={PlayPause} />
          )}
          <BsChevronRight
            className="player_btns"
            onClick={() =>
              parseInt(song.id, 10) + 1 < size &&
              setNextPrevTrack(parseInt(song.id, 10) + 1)
            }
            size={20}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
