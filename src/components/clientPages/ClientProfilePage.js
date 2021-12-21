import React from 'react';
import {Typography} from "@mui/material";
import {MainNavBar} from "../MainNavBar";
import {Outlet} from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Footer from "../UI/common/footer/Footer";

const ClientProfilePage = () => {
    return (<div>
      <MainNavBar/>
            <div style={{marginTop:150}}>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default ClientProfilePage;
