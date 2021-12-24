import * as React from "react";
import {Avatar, Box, IconButton, Typography} from "@mui/material";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";
import {useProfileCardStyles} from "./ProfileCardStyles";
import SuccessSVG from "../../../../assets/svg/Profile/SuccessSVG";
import InfoSVG from "../../../../assets/svg/Profile/InfoSVG";


const ProfileStatus = () => {
    const classes = useProfileCardStyles()
    return (
        <Box sx={{boxShadow: 2}} className={classes.root}>

                    <Typography variant={"h6"}>Статус профиля</Typography>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Avatar style={{marginRight: 25}}/>
                <Box>
                    <div  style={{display: "flex", alignItems: "center"}}>
                        <Typography variant={"h6"}>Елена</Typography>
                        <InfoSVG size={8} color={"#4B9A2D"} margin={"-5px 0 0 5px"}/>
                    </div>
                    <Typography variant={"h5"} style={{margin: 0}}>в сети</Typography>
                </Box>
            </Box>
            <Typography variant={"h5"}
                        component="div">
                <SuccessSVG/>
                Эл. почта подтверждена
            </Typography>

            <Typography variant={"h5"} component="div">
                <InfoSVG/>
                Номер не подтвержден
            </Typography>
            <Typography variant={"h5"} component="div">
                <InfoSVG/>
                Профиль не подтвержден
            </Typography>
            <Typography variant="caption" style={{fontStyle:"italic", color:"#808080"}}>В лиге с12 марта 2019</Typography>
        </Box>
    );
};
export default ProfileStatus;
