import "./songCard.styles.css";

function SongCard() {
  return (
    <div className="container">
      <img
        id="img"
        src="https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg"
        alt="Music"
      />
      <div className="description">
        <h4>Title song</h4>
        <span className="artist">Artist</span>
      </div>
    </div>
  );
}

export default SongCard;
