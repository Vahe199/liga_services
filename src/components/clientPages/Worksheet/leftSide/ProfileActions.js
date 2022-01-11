import * as React from "react";
import {Box, Typography} from "@mui/material";
import {useProfileCardStyles} from "../../../../globalStyles/ProfileCardStyles";
import Card from "@mui/material/Card";

const ProfileActions = () => {
    const classes = useProfileCardStyles()
    return (
        <Card sx={{boxShadow: 2}} className={classes.root}>

                    <Typography variant={"h6"}>Действия с профилем</Typography>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Typography variant={"h6"} className={classes.textBtn}>Выйти</Typography>
            <Typography variant={"h6"} className={classes.textBtn}>Удалить</Typography>
            <Typography variant={"h5"} style={{margin:0}}>Вы потеряете акаунт исполнителя
              <br/>  и заказчика</Typography>
   </Card>
    );
};
export default ProfileActions;