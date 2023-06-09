import "./Routing.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Page404 from "../../Pages/Page404/Page404";
import CharactersList from "../../Pages/CharactersList/CharactersList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="home" element={<Home />}/>
                <Route index element={<Home />}/>
                <Route path="about" element={<About/>}/>
                <Route path="CharactersList" element={<CharactersList/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
