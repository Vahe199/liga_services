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
import CustomerReviews from "../../CustomerReviews";
import ModalPersonalData from "../../UI/modals/ModalPersonalData";

const useAncetaStyles = makeStyles({
    root:{
         height:"100%",
        marginBottom:70,
        "& .MuiCard-root": {
            borderRadius: '20px',
            marginBottom: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            margin: '20px',
        },
    },
})

export const Worksheet = () =>{
    const classes = useAncetaStyles()

    const [edit, setEdit] = useState(false)
    const [editPersonallyData, setEditPersonallyData] = useState(false);
    const [editSocialNetwork, setEditSocialNetwork] = useState(false);
    const [notificationsOrder, setNotificationOrders] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return( <Container maxWidth={'lg'} className={classes.root}>
            <ModalPersonalData showModal={showModal} setShowModal={setShowModal}/>
        <Grid container spacing={1}>
            <Grid item sm={12} lg={4}>
                <ProfileStatus setShowModal={setShowModal}/>
                <SocialNetworks setEditSocialNetwork={setEditSocialNetwork} editSocialNetwork={editSocialNetwork}/>
                <OrderNotifications notificationsOrder={notificationsOrder} setNotificationOrders={setNotificationOrders} />
                <ProfileActions/>
            </Grid>
            <Grid item sm={12} lg={8}>
                {editPersonallyData ? <EditPersonalData setEditPersonallyData={setEditPersonallyData}
                    />
                   : <PersonalData setEditPersonallyData={setEditPersonallyData}/>}
                {/*modal*/}
                <EditProfileData />

                <CustomerReviews />
            </Grid>
        </Grid>
        </Container>
    )
}
