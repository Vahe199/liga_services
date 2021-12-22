import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import Container from "@mui/material/Container";
import {useLocation} from "react-router-dom";
const useAncetaStyles = makeStyles({
    root:{
        backgroundColor:"#CFCFCF",
    }
})
export const Worksheet = () =>{
    const classes = useAncetaStyles()
    return(
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <h1>Worksheet</h1>
            </Container>
        </div>
    )
}
