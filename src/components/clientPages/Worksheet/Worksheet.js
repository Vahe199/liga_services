import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import {Container, Grid} from "@mui/material";
import ProfileData from "./InfoCard/ProfileData";
import PersonalData from "./InfoCard/PersonalData";
import OrderNotifications from "./InfoCard/OrderNotifications";
import ProfileStatus from "./ProfileCard/ProfileStatus";
import SocialNetworks from "./ProfileCard/SocialNetworks";
import ProfileActions from "./ProfileCard/ProfileActions";
import EditProfileData from "./EditPages/EditProfileData";
import EditPersonalData from "./EditPages/EditPersonalData";
import EditSocialNetworks from "./EditPages/EditSocialNetworks";
import EditOrderNotifications from "./EditPages/EditOrderNotifications";

const useAncetaStyles = makeStyles({
    root:{
         height:"100%",
        marginBottom:70,
    }
})

export const Worksheet = () =>{
    const classes = useAncetaStyles()

    const [edit, setEdit] = useState(false)
    return( <Container maxWidth={'lg'} className={classes.root}>
        <Grid container spacing={2}>
            <Grid item sm={12} lg={4}>
                <ProfileStatus/>
                <SocialNetworks/>
                <ProfileActions/>
            </Grid>
            <Grid item sm={12} lg={8}>
                {edit ?
                    <div>
                        <EditProfileData setEdit={setEdit}/>
                        <EditPersonalData/>
                        <EditSocialNetworks/>
                        <EditOrderNotifications/>
                    </div>
                    : <div>
                        <ProfileData setEdit={setEdit}/>
                        <PersonalData/>
                        <OrderNotifications/>
                    </div>}
            </Grid>
        </Grid>
        </Container>
    )
}
