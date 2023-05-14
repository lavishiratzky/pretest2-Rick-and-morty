
import './App.css';
import Header from './Components/Layouts/Header/Header';
import Menu from './Components/Layouts/Menu/Menu';
import Main from './Components/Layouts/Main/Main';
import Footer from './Components/Layouts/Footer/Footer';
import { BrowserRouter, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Menu/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
