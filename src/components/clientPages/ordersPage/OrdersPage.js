import React from 'react';
import {Container, Grid} from "@mui/material";
import FilterOrders from "./blocks/FilterOrders";
import ResponseAmount from "../../executor/ResponseAmount";
import {useOrderStyles} from "../../../globalStyles/OrderStyles";
import Box from "@mui/material/Box";


const OrdersPage = () => {
    const classes = useOrderStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <FilterOrders />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        <ResponseAmount />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OrdersPage;