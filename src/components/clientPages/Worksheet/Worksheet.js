import React from "react";
import {makeStyles} from "@material-ui/core";
import {Container, Grid} from "@mui/material";
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
    return( <Container maxWidth={'lg'} className={classes.root}>
        <Grid container spacing={2}>
            <Grid item sm={12} lg={4}>
                <ProfileStatus/>
                <SocialNetworks/>
                <ProfileActions/>
            </Grid>
            <Grid item sm={12} lg={8}>
                <ProfileData/>
                <PersonalData/>
                <OrderNotifications/>
            </Grid>
        </Grid>
        </Container>
    )
}
