import React, {useEffect, useState} from 'react';
import FilterOrders from "./blocks/FilterOrders";
import {useOrderStyles} from "../../../globalStyles/OrderStyles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {OrderExecutor} from "../../../utils/data/orders/OrderExecutor";
import OrderExecutorBlock from "./blocks/OrderExecutorBlock";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const OrdersPage = () => {
    const classes = useOrderStyles();
    const [showFilterBlock, setShowFilterBlock] = useState(true);
    const [orders, setShowOrders] = useState(OrderExecutor);

    const deleteOrder = (id) => {
        setShowOrders((prev) => orders.filter((item) => id !== item.id));
        //console.log(id)
    }

    useEffect(() => {

    }, [orders])

    return (
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <FilterOrders showFilterBlock={showFilterBlock} setShowFilterBlock={setShowFilterBlock} />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        {OrderExecutor.map((order, index) =>
                            <Card key={index}>
                                <OrderExecutorBlock index={index} deleteOrder={deleteOrder} order={order}/>
                            </Card>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OrdersPage;
