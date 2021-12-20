import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClientBar from './clients/ClientBar';
import RegistrationPage from "./components/authPages/registrationPage/RegistrationPage";
import LoginPage from "./components/authPages/loginPage/LoginPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/registration' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            {/*test*/}
            {/*<Route path='/' element={<RegistrationPage />} />*/}
            {/*<Route path='/' element={<LoginPage />} />*/}
        </Routes>
        {/*<ClientBar/>*/}
      </BrowserRouter>
  )
}

export default App;
