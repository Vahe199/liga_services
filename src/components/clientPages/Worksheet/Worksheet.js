import React, {useState} from "react";
import {Container, Grid} from "@mui/material";
import PersonalData from "./InfoCard/PersonalData";
import OrderNotifications from "./InfoCard/OrderNotifications";
import ProfileStatus from "./ProfileCard/ProfileStatus";
import SocialNetworks from "./ProfileCard/SocialNetworks";
import ProfileActions from "./ProfileCard/ProfileActions";
import EditProfileData from "./EditPages/EditProfileData";
import EditPersonalData from "./EditPages/EditPersonalData";
import CustomerReviews from "../../CustomerReviews";
import ModalPersonalData from "../../UI/modals/ModalPersonalData";
import {makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";
import DistrictsAndAddresses from "./DistrictsAndAddresses";
import AboutOrder from "../../executor/AboutOrder";
import AdditionalFiles from "../../executor/AdditionalFiles";
import EducationAndCertifications from "../../executor/EducationAndCertifications";
import Filtr from "../../executor/Filtr";
import Portfolio from "../../executor/Portfolio";
import ResponseAmount from "../../executor/ResponseAmount";
import Box from "@mui/material/Box";
import ExperienceBlock from "./ExperienceBlock";
import EducationAndCertificatesEdit from "../../executor/EducationAndCertificatesEdit";

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
    const {status} = useSelector(state => state.auth)
    const [editPersonallyData, setEditPersonallyData] = useState(false);
    const [editSocialNetwork, setEditSocialNetwork] = useState(false);
    const [notificationsOrder, setNotificationOrders] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const [editExperienceBlock, setEditExperienceBlock] = useState(false);

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
                {status === 'executor' &&
                <Box>
                    <DistrictsAndAddresses
                        editAddress={editAddress}
                        setEditAddress={setEditAddress}
                    />
                    <ExperienceBlock editExperienceBlock={editExperienceBlock} setEditExperienceBlock={setEditExperienceBlock} />
                </Box>
                }
                <CustomerReviews />
                {/*<AboutOrder />*/}
                {/*<AdditionalFiles />*/}
                {/*<EducationAndCertifications />*/}
                {/*<EducationAndCertificatesEdit />*/}
                {/*<Filtr />*/}
                {/*<PersonalData />*/}
                {/*<Portfolio />*/}
                {/*<ResponseAmount />*/}
            </Grid>
        </Grid>
        </Container>
    )
}
