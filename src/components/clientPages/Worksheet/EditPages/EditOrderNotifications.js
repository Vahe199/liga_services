import * as React from "react";
import {Box, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useEditCardStyles} from "./EditCardStyles";
import Card from "@mui/material/Card";

const radio = {
    color: "#4B9A2D",
    '&.Mui-checked': {
        color: "#4B9A2D",
    },
}
const EditOrderNotifications = () => {
    const classes =useEditCardStyles()
    const [value, setValue] = React.useState('На почту и по СМС');
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
                <Typography className={classes.title}>
                    Увидомления по заказам
                </Typography>
            <Box style={{background:"#808080", height:2}}/>
                <Typography variant={"h5"}>
                    Способ получения увидомления
                </Typography>

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
export default EditOrderNotifications;
