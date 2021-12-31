import * as React from "react";
import {Typography, Box, IconButton, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useInfoCardStyles} from "./InfoCardStyles";
import Card from "@mui/material/Card";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";
import {FileSVG} from "../../../../assets/svg/Profile/FileSVG";

const radio = {
    color: "#4B9A2D",
    '&.Mui-checked': {
        color: "#4B9A2D",
    },
}

const OrderNotifications = ({notificationsOrder, setNotificationOrders}) => {
    const classes = useInfoCardStyles();
    const [value, setValue] = React.useState('На почту и по СМС');
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h6"}>Увидомления по заказам</Typography>
                {notificationsOrder ?
                    <IconButton onClick={() => setNotificationOrders(false)}>
                        <FileSVG color={'#808080'} />
                    </IconButton> :
                    <IconButton onClick={() => setNotificationOrders(true)}>
                    <PenSvg/>
                </IconButton>}
            </Box>
            <Box style={{background:"#808080", height:2}}/>
            {notificationsOrder ? <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                >

                    <FormControlLabel value="На почту и по СМС"
                                      control={<Radio sx={radio} size={"small"}/>} label="На почту и по СМС" />
                    <FormControlLabel value="На почту" control={<Radio sx={radio} size={"small"}/>} label="На почту" />
                    <FormControlLabel value="по СМС" control={<Radio sx={radio} size={"small"}/>} label="по СМС" />

                </RadioGroup> :
                <Box>
                    <Typography variant={"h5"}>
                        Способ получения увидомления
                    </Typography>
                    <Typography>
                        На почту и по СМС
                    </Typography>
                </Box>}

        </Card>
    )
};
export default OrderNotifications;
