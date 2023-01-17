import SongCard from "../../SongCard/SongCard.component";
import "./sidebar.style.css";

function SideBar() {
  return (
    <div className="sidebar">
      <h2 className="title-sidebar">Library</h2>
      <div>
        <ul>
          <li>
            <SongCard />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
