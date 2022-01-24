import React, {useEffect} from "react";
import Card from "@mui/material/Card";
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";
import PenSvg from "../../../../../assets/svg/Profile/PenSvg";
import CustomDivider from "../../../../UI/customDivider/CustomDivider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const OrderNotificationsData = ({geting_notification, setNotificationOrders}) => {
  const classes = useInfoCardStyles();

  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
      <Box className={classes.orderSubBlockSpaceBetween}>
        <Typography style={{margin: '0'}} variant={"h6"}>Увидомления по заказам</Typography>
        <IconButton onClick={() => setNotificationOrders(true)}>
           <PenSvg/>
        </IconButton>
      </Box>
      <CustomDivider />
      <Box>
        <Typography variant={"h5"}>Способ получения увидомления</Typography>
        <Typography>{geting_notification}</Typography>
      </Box>
    </Card>
  );
};
export default OrderNotificationsData;
