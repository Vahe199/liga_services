import * as React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";
import PenSvg from "../../../../../assets/svg/Profile/PenSvg";
import CustomDivider from "../../../../UI/customDivider/CustomDivider";

const OrderNotificationsData = ({notificationsOrder, setNotificationOrders}) => {
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
        <Typography>На почту и по СМС</Typography>
      </Box>
    </Card>
  );
};
export default OrderNotificationsData;
