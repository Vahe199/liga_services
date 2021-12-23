import React from 'react';
import {Container, Typography} from "@mui/material";
import {MainNavBar} from "../MainNavBar";
import {Outlet} from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Footer from "../UI/common/footer/Footer";
import {makeStyles} from "@material-ui/core";
const useProfileStyles = makeStyles({
   root:{
        height:"100vh",
        overflow:"auto",
    },
    container:{
         height:"100vh",
        backgroundColor:"#CFCFCF",
        paddingTop:78
    }
})
const ClientProfilePage = () => {
    const classes = useProfileStyles()
    return (
        <div className={classes.root}>
            <MainNavBar/>
            <div  className={classes. container}>
                <Outlet/>
            </div>
         {/*<Footer/>*/}
        </div>
    )
}

export default ClientProfilePage;
