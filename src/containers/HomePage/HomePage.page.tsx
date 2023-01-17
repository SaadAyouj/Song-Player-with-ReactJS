import SideBar from "../../components/Layout/SideBar/SideBar.component.";
import Player from "../../components/Player/Player.component";
import "../styles/homepage.styles.css";

function HomePage() {
  return (
    <div>
      <div className="column">
        <SideBar />
      </div>
      <div className="double-column">
        <Player />
      </div>
    </div>
  );
}

export default HomePage;
