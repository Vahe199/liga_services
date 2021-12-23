import React from "react";
import {makeStyles} from "@material-ui/core";
import {Grid} from "@mui/material";
import ProfileData from "./InfoCard/ProfileData";
import PersonalData from "./InfoCard/PersonalData";
import OrderNotifications from "./InfoCard/OrderNotifications";
import ProfileStatus from "./ProfileCard/ProfileStatus";
import SocialNetworks from "./ProfileCard/SocialNetworks";
import ProfileActions from "./ProfileCard/ProfileActions";

const useAncetaStyles = makeStyles({
    root:{
         height:"100%",
        marginBottom:70,
    }
})

export const Worksheet = () =>{
    const classes = useAncetaStyles()
    return(
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={4}>
                <ProfileStatus/>
                <SocialNetworks/>
                <ProfileActions/>
            </Grid>
            <Grid item xs={8}>
                <ProfileData/>
                <PersonalData/>
                <OrderNotifications/>
            </Grid>
        </Grid>
    )
}
