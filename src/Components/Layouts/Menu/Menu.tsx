import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<h1>Menu</h1>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="CharactersList">Characters</Link>
        </div>
    );
}

export default Menu;
