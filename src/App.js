import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/authPages/loginPage/LoginPage";
import RegistrationPage from "./components/authPages/registrationPage/RegistrationPage";
import ClientBar from "./clients/ClientBar";
import ClientProfilePage from "./components/clientPages/ClientProfilePage";
import {MainNavBar} from "./components/MainNavBar";
import React from "react";

import {Anketa} from "./components/clientPages/Anketa";



function App() {
  return (<div style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='registration' element={<RegistrationPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='clientPage/*' element={<ClientProfilePage />} >
                <Route path={":page?"} element={<Anketa/>}/>
                {/*<Route path={"team"} element={<p>Our team</p>}/>*/}

            </Route>
        </Routes>
      </BrowserRouter>
      {/* <ClientBar/>
        <BlockBar /> */}
      </div>
  )
}

export default App;
