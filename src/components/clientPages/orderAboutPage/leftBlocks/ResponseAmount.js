import React from "react";
import {Box, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";

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
        <Divider color={'#808080'} style={{margin: "10px 0"}} />
        <Typography variant={'h4'}>
            Сумма за отклик списывается с вашего счета только при условии подтверждении заказчиком, вас в роли исполнителя.
        </Typography>
    </Card>
  );
};

export default ResponseAmount;
