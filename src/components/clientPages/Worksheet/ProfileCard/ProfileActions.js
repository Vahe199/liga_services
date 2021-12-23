import * as React from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {useProfileCardStyles} from "./ProfileCardStyles";
import VK from "../../../../assets/image/VK.png"
import Instagram from "../../../../assets/image/Instagram.png"

const ProfileActions = () => {
    const classes = useProfileCardStyles()
    return (
        <Box sx={{boxShadow: 2}} className={classes.root}>

                    <Typography variant={"h6"}>Действия с профилем</Typography>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Typography variant={"h6"} className={classes.textBtn}>Выйти</Typography>
            <Typography variant={"h6"} className={classes.textBtn}>Удалить</Typography>
            <Typography variant={"h5"} style={{margin:0}}>Вы потеряете акаунт исполнителя
              <br/>  и заказчика</Typography>
   </Box>
    );
};
export default ProfileActions;
