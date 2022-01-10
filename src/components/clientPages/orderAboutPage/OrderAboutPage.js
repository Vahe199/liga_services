import React, {useEffect, useState} from "react";
import {Container, Grid, Typography} from "@mui/material";
import ModalPersonalData from "../../UI/modals/ModalPersonalData";
import Box from "@mui/material/Box";
import {useOrderAboutStyles} from "../../../globalStyles/OrderAboutStyles";
import {useParams} from "react-router-dom";
import PersonalData from "../Worksheet/rightSide/PersonalData";
import ProfileStatus from "../Worksheet/leftSide/ProfileStatus";


const OrderAboutPage = () => {
    const classes = useOrderAboutStyles()
    const [showModal, setShowModal] = useState(false);
    const params = useParams();

    return(
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <ModalPersonalData showModal={showModal} setShowModal={setShowModal}/>
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <ProfileStatus />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        <Typography variant={'h1'}>svbsdvsvd</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OrderAboutPage;
