import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClientBar from './clients/ClientBar';

function App() {
  return (
      <BrowserRouter>
        {/* <Routes>
            <Route path='/' element={<HomePage />} /> 
        </Routes> */}
         <ClientBar/>
      </BrowserRouter>

  )
}

export default App;
