import * as React from "react";
import {Box, FormControlLabel, IconButton, Radio, RadioGroup, Typography} from "@mui/material";

import Card from "@mui/material/Card";
import {FileSVG} from "../../../../../../src/assets/svg/Profile/FileSVG";
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";

const radio = {
    color: "#4B9A2D",
    '&.Mui-checked': {
        color: "#4B9A2D",
    },
}

const OrderNotificationsEdit = ({notificationsOrder, setNotificationOrders}) => {
    const classes = useInfoCardStyles();
    const [value, setValue] = React.useState('На почту и по СМС');
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h6"}>Увидомления по заказам</Typography>             
                    <IconButton onClick={() => setNotificationOrders(false)}>
                        <FileSVG color={'#808080'} />
                    </IconButton> 
            </Box>
            <Box style={{background:"#808080", height:2}}/>
           <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                >

                    <FormControlLabel value="На почту и по СМС"
                                      control={<Radio sx={radio} size={"small"}/>} label="На почту и по СМС" />
                    <FormControlLabel value="На почту" control={<Radio sx={radio} size={"small"}/>} label="На почту" />
                    <FormControlLabel value="по СМС" control={<Radio sx={radio} size={"small"}/>} label="по СМС" />

                </RadioGroup> 
        </Card>
    )
};
export default OrderNotificationsEdit;
