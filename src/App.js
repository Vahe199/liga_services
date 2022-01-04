import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/authPages/loginPage/LoginPage";
import RegistrationPage from "./components/authPages/registrationPage/RegistrationPage";
import ClientProfilePage from "./components/clientPages/ClientProfilePage";
import React from "react";
import {Worksheet} from "./components/clientPages/Worksheet/Worksheet";
import Support, {Backing} from "./components/clientPages/Support/Support";
import {MyOrders} from "./components/clientPages/MyOrders/MyOrders";


function App() {
    return (<div style={{overflow: "hidden"}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='registration' element={<RegistrationPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='clientPage/*' element={<ClientProfilePage/>}>
                        <Route path={"worksheet"} element={<Worksheet/>}/>
                        <Route path={"support"} element={<Support/>}/>
                        <Route path={"MyOrders"} element={<MyOrders/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
