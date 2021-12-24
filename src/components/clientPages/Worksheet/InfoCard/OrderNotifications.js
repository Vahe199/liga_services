import * as React from "react";
import { Typography, Box } from "@mui/material";
import {useInfoCardStyles} from "./InfoCardStyles";


const OrderNotifications = () => {
    const classes =useInfoCardStyles()
    return (
        <Box sx={{ boxShadow: 2 }} className={classes.root}>
            <Typography variant={"h6"}>
                    Увидомления по заказам
                </Typography>
            <Box style={{background:"#808080", height:2}}/>
               <Typography variant={"h5"}>
                   Способ получения увидомления
               </Typography>
               <Typography>
                   На почту и по СМС
               </Typography>
        </Box>
    )
};
export default OrderNotifications;
