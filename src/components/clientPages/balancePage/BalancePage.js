import React, {useState} from "react";
import Box from "@mui/material/Box";
import {useOrderAboutStyles} from "../../../globalStyles/OrderAboutStyles";
import MyBalance from "./leftSide/MyBalance";
import Transactions from "./rightSide/Transactions";
import Rule1 from "./rightSide/Rule1";
import Rule2 from "./rightSide/Rule2";
import ModalBalance from "../../UI/modals/ModalBalance";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const BalancePage = () => {
    const classes = useOrderAboutStyles();
    const [showModal, setShowModal] = useState(false);
    return (
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <ModalBalance showModal={showModal} setShowModal={setShowModal} />
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <MyBalance setShowModal={setShowModal} />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        <Transactions />
                        <Rule1 />
                        <Rule2 />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BalancePage;
