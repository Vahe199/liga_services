import React, {useState} from "react";
import SuccessSVG from "../../../../assets/svg/Profile/SuccessSVG";
import InfoSVG from "../../../../assets/svg/Profile/InfoSVG";
import Card from "@mui/material/Card";
import {useSelector} from "react-redux";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";


const ProfileShow = () => {
    const classes = useOrderAboutStyles();
    const {status} = useSelector(state => state.auth);
    const [avatarPreview, setAvatarPreview] = useState();

    return (
        <Card sx={{boxShadow: 2}}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h2"}>Статус профиля</Typography>
            </Box>
            <CustomDivider />
            <Box style={{display: "flex", alignItems: "center", marginBottom: '10px'}}>
                <Avatar style={{marginRight: 10, width: '50px', height: '50px'}}/>
                <Box>
                    <div  style={{display: "flex", alignItems: "center"}}>
                        <Typography variant={"h6"}>Елена</Typography>
                        <InfoSVG size={8} color={"#4B9A2D"} margin={"-5px 0 0 5px"}/>
                    </div>
                </Box>
            </Box>
            <Typography variant={"h4"}
                        style={{marginBottom: '10px', display: 'flex'}}
                        component="div">
                <SuccessSVG/>
                Эл. почта подтверждена
            </Typography>
                <Typography style={{marginBottom: '10px', display: 'flex'}} variant={"h4"} component="div">
                    <InfoSVG/>
                    Номер подтвержден
                </Typography>
            <Typography style={{marginBottom: '10px', display: 'flex'}} variant={"h4"} component="div" >
                <InfoSVG/>
                Профиль подтвержден
            </Typography>
            <Typography variant="caption" style={{fontStyle:"italic", color:"#808080"}}>В лиге с12 марта 2019</Typography>
        </Card>
    );
};
export default ProfileShow;
