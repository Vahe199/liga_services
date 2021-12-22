import React from 'react';
import {Typography} from "@mui/material";
import {MainNavBar} from "../MainNavBar";
import {Outlet} from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Footer from "../UI/common/footer/Footer";
import {makeStyles} from "@material-ui/core";
const useProfileStyles = makeStyles({
    root:{
        marginTop:78,
        height:"100vh",
        backgroundColor:"#CFCFCF",
    }
})
const ClientProfilePage = () => {
    const classes = useProfileStyles()
    return (<div>
            <MainNavBar/>
            <div className={classes.root}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default ClientProfilePage;
