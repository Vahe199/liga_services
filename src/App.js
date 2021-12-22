import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/authPages/loginPage/LoginPage";
import RegistrationPage from "./components/authPages/registrationPage/RegistrationPage";
import ClientBar from "./clients/ClientBar";
import ClientProfilePage from "./components/clientPages/ClientProfilePage";
import {MainNavBar} from "./components/MainNavBar";
import React from "react";
import BlockBar from './websitedevelopment/BlockBar';


function App() {
  return (<div style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='registration' element={<RegistrationPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='clientPage/*' element={<ClientProfilePage />} >
                <Route path={":page"} element={<p>Our contact</p>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      {/* <ClientBar/>
        <BlockBar /> */}
      </div>
  )
}

export default App;
