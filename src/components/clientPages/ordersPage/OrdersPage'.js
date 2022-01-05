import React from 'react';
import {makeStyles} from "@material-ui/core";
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import ProfileStatus from "../Worksheet/ProfileCard/ProfileStatus";
import SocialNetworks from "../Worksheet/ProfileCard/SocialNetworks";
import OrderNotifications from "../Worksheet/InfoCard/OrderNotifications";
import ProfileActions from "../Worksheet/ProfileCard/ProfileActions";
import EditPersonalData from "../Worksheet/EditPages/EditPersonalData";
import PersonalData from "../Worksheet/InfoCard/PersonalData";
import DistrictsAndAddresses from "../Worksheet/DistrictsAndAddresses";
import ExperienceBlock from "../Worksheet/ExperienceBlock";
import Portfolio from "../Worksheet/Portfolio";
import EducationBlock from "../Worksheet/EducationBlock";
import CustomerReviews from "../../CustomerReviews";
import Filtr from "../../executor/Filtr";
import ResponseAmount from "../../executor/ResponseAmount";

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

const OrdersPage = () => {
    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={1}>
                <Grid item sm={12} lg={4}>
                   <Filtr />
                </Grid>
                <Grid item sm={12} lg={8}>
                    <ResponseAmount />
                </Grid>
            </Grid>
        </Container>
    )
}

export default OrdersPage;