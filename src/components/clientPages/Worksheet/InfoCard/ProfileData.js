import * as React from "react";
import {Avatar, Box, IconButton, Typography} from "@mui/material";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";
import {useInfoCardStyles} from "./InfoCardStyles";


const ProfileData = () => {
    const classes = useInfoCardStyles()
    return (
        <Box sx={{boxShadow: 2}} className={classes.root}>
            <Box className={classes.titleWrap}>
                <div style={{display: "flex"}}>
                    <Typography variant={"h6"}>Данные профиля</Typography>
                    <div onClick={() => console.log("pencil clicked")} style={{cursor: "pointer", marginLeft: 20}}>
                        <PenSvg/>
                    </div>
                </div>
                <Typography style={{color: "#DF040A", fontSize: "14px"}}>
                    *Телефон не подтвержден
                </Typography>
            </Box>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Avatar style={{marginRight: 25}}/>
                <Typography >Загрузите фотографию профиля</Typography>
            </Box>
            <Typography variant={"h5"} >
                Электронная почта
            </Typography>
            <Typography >
                example@gmail.com
            </Typography>
            <Typography variant={"h5"} >
                Номер телефона
            </Typography>
            <Typography >+7 999 999 9999 </Typography>
        </Box>
    );
};
export default ProfileData;
