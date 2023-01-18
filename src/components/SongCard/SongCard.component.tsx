import "./songCard.styles.css";

function SongCard({
  song,
  setSong,
  active,
}: {
  song: any;
  setSong: any;
  active: boolean;
}) {
  return (
    <div
      className="container"
      onClick={() => setSong(song)}
      role="presentation"
      style={active ? { backgroundColor: "#89B3D5" } : {}}
    >
      <div>
        <img id="img" src={song.cover} alt="Music" />
      </div>
      <div className="description">
        <span>{song.name}</span>
        <span className="artist">{song.artist}</span>
      </div>
    </div>
  );
}

export default SongCard;
