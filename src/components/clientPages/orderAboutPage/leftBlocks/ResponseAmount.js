import React from "react";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import Box from "@mui/material/Box";

const ResponseAmount = () => {
    const classes = useOrderAboutStyles();
  return (
    <Card>
        <Box className={classes.orderSubBlockSpaceBetween}>
            <Typography variant={'h2'}>
                 Сумма отклика
            </Typography>
            <Typography variant={'h2'}>
                 30 руб
            </Typography>
        </Box>
        <CustomDivider />
        <Typography variant={'h4'}>
            Сумма за отклик списывается с вашего счета только при условии подтверждении заказчиком, вас в роли исполнителя.
        </Typography>
    </Card>
  );
};

export default ResponseAmount;
