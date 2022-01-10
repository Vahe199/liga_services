import React, {useEffect, useState} from 'react';
import {Container, Grid} from "@mui/material";
import FilterOrders from "./blocks/FilterOrders";
import ResponseAmount from "../../executor/ResponseAmount";
import {useOrderStyles} from "../../../globalStyles/OrderStyles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {OrderExecutor} from "../../../utils/data/orders/OrderExecutor";
import {OrdersData} from "../../../utils/data/orders/OrdersData";
import OrderBlock from "../MyOrders/blocks/OrderBlock";
import OrderExecutorBlock from "./blocks/OrderExecutorBlock";


const OrdersPage = () => {
    const classes = useOrderStyles();
    const [showFilterBlock, setShowFilterBlock] = useState(true);
    const [orders, setShowOrders] = useState(OrderExecutor);

    const deleteOrder = (id) => {
        setShowOrders((prev) => orders.filter((item) => id !== item.id));
        console.log(id)
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