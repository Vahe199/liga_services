import React, {useEffect, useState} from "react";
import {Container, Grid, Typography} from "@mui/material";
import ModalPersonalData from "../../UI/modals/ModalPersonalData";
import Box from "@mui/material/Box";
import {useOrderAboutStyles} from "../../../globalStyles/OrderAboutStyles";
import {useLocation, useParams} from "react-router-dom";
import PersonalData from "../Worksheet/rightSide/PersonalData";
import ProfileStatus from "../Worksheet/leftSide/ProfileStatus";
import ProfileShow from "./leftBlocks/ProfileShow";
import AdditionalFiles from "./leftBlocks/AdditionalFiles";
import ResponseAmount from "./leftBlocks/ResponseAmount";
import OrderContent from "./rightBlocks/OrderContent";
import ModalWallet from "../../UI/modals/ModalWallet";


const OrderAboutPage = () => {
    const classes = useOrderAboutStyles()
    const [showModal, setShowModal] = useState(false);
    const params = useParams();
    const location = useLocation();
    const {meeting} = location.state;
    return(
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <ModalWallet showModal={showModal} setShowModal={setShowModal}/>
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <ProfileShow />
                        <AdditionalFiles />
                        <ResponseAmount />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        <OrderContent setShowModal={setShowModal} meeting={meeting} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OrderAboutPage;
