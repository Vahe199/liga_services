import React, {useState} from "react";
import Box from "@mui/material/Box";
import {useLocation, useParams} from "react-router-dom";
import ProfileShow from "./leftBlocks/ProfileShow";
import AdditionalFiles from "./leftBlocks/AdditionalFiles";
import ResponseAmount from "./leftBlocks/ResponseAmount";
import OrderContent from "./rightBlocks/OrderContent";
import ModalWallet from "../../UI/modals/ModalWallet";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {useOrderAboutStyles} from "../../../globalStyles/OrderAboutStyles";
import moment from "moment";


const OrderAboutPage = () => {
    const classes = useOrderAboutStyles()
    const [showModal, setShowModal] = useState(false);
    const params = useParams();
    const location = useLocation();
    const {meeting} = location.state;
    const state = location.state
    const task_starttime = moment(state?.task_starttime).toDate();
    const task_finishtime = moment(state?.task_finishtime).toDate();
    const start_time = moment(task_starttime).format(`DD MMM (ddd)`)
    const finsih_time = moment(task_finishtime).format(`DD MMM (ddd)`)

    return(
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <ModalWallet showModal={showModal} setShowModal={setShowModal}/>
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <ProfileShow state={state} />
                        <AdditionalFiles state={state} />
                        <ResponseAmount state={state} />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        <OrderContent start_time={start_time}
                                      state={state}
                                      finsih_time={finsih_time}
                                      setShowModal={setShowModal}
                                      meeting={meeting} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OrderAboutPage;
