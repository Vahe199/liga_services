import React from "react";
import {makeStyles} from "@material-ui/core";
import Container from "@mui/material/Container";
const useAncetaStyles = makeStyles({
    root:{
        marginTop:78,
        height:500,
        backgroundColor:"#CFCFCF",
    }
})
export const Backing = () =>{
    const classes = useAncetaStyles()
    return(
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <h1>Backing page</h1>
            </Container>
        </div>
    )
}
