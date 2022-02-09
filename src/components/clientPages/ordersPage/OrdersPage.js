import React, {useEffect, useState} from 'react';
import FilterOrders from "./blocks/FilterOrders";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import OrderExecutorBlock from "./blocks/OrderExecutorBlock";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {useOrderStyles} from "../../../globalStyles/OrderStyles";
import {useDispatch, useSelector} from "react-redux";
import {getAllTasks} from "../../../store/actions/TaskExecutorActions";
import Spinner from "../../UI/spinner/Spinner";


const OrdersPage = () => {
    const classes = useOrderStyles();
    const dispatch = useDispatch()
    const {tasks, load, successWork} = useSelector(state => state.taskExecutor)
    //const reverseTask = tasks.reverse()
    const [showFilterBlock, setShowFilterBlock] = useState(true);
    const [orders, setShowOrders] = useState('');

    const deleteOrder = (id) => {
        //setShowOrders((prev) => orders.filter((item) => id !== item.id));
        //console.log(id)
    }

    useEffect(() => {
        dispatch(getAllTasks())
    }, [])

    return (
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <Grid container spacing={1}>
                    <Grid item sm={12} lg={4}>
                        <FilterOrders showFilterBlock={showFilterBlock} setShowFilterBlock={setShowFilterBlock} />
                    </Grid>
                    <Grid item sm={12} lg={8}>
                        {load ? <Spinner percentLeft={'60%'}
                                         mediaPercentLeft={'50%'}
                                         top={'150px'}/> :
                            tasks.map((order, index) =>
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
