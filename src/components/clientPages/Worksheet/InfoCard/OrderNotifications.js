import * as React from "react";
import {Typography, Box, IconButton} from "@mui/material";
import {useInfoCardStyles} from "./InfoCardStyles";
import Card from "@mui/material/Card";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";


const OrderNotifications = () => {
    const classes =useInfoCardStyles()
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h6"}>Привязанные соцсети</Typography>
                <IconButton>
                    <PenSvg />
                </IconButton>
            </Box>
            <Box style={{background:"#808080", height:2}}/>
               <Typography variant={"h5"}>
                   Способ получения увидомления
               </Typography>
               <Typography>
                   На почту и по СМС
               </Typography>
        </Card>
    )
};
export default OrderNotifications;
