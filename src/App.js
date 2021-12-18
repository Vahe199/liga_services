import './App.css';
import HomePage from "./components/homePage/HomePage";
import MainNavBar from "./components/MainNavBar"
import ContainerBar from "./components/ContainerBar"
import FooterBar from './components/FooterBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Intro from "./components/intro/Intro";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/nav' element={<Intro />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App;
