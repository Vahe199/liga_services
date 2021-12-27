import React from 'react';
import {MainNavBar} from "../MainNavBar";
import {Outlet} from "react-router-dom";
import Footer from "../UI/common/footer/Footer";
import {makeStyles} from "@material-ui/core";

const useProfileStyles = makeStyles({
   root:{
         overflow:"auto",
          height:"100vh",
       "& .MuiButton-contained": {
           backgroundColor: '#4B9A2D',
           borderRadius: '10px',
           color: '#fff',
           fontWeight: 500,
       },
       "& .MuiButton-outlined": {
           background: "#445E77",
           textTransform: "none",
           color: '#fff',
           fontWeight: 500,
           borderRadius: '10px',
           "&:hover": {
               background: '#6585a5 !important',
           }
       },
            '& .MuiInput-root': {
             border: 'none'
            },
             '& .Mui-error': {
                 border: '2px green solid'
             },
    },
    container:{
       backgroundColor:"#e1e3e5",
        paddingTop:78
    }
})
const ClientProfilePage = () => {
    const classes = useProfileStyles()
    return (
        <div className={classes.root} >
              <MainNavBar/>
            <div  className={classes.container}>
              <Outlet/>
            </div>
         <Footer/>
        </div>
    )
}

export default ClientProfilePage;
