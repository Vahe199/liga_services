import React from "react";
import Card from "@mui/material/Card";
import {FileSVG} from "../../../../../../src/assets/svg/Profile/FileSVG";
import {useInfoCardStyles} from "../../../../../globalStyles/InfoCardStyles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {FormControlLabel, RadioGroup} from "@mui/material";
import {Radio} from "@material-ui/icons";

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
