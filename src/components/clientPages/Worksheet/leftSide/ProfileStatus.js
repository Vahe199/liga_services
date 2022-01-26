import React, {useEffect, useState} from "react";
import {useProfileCardStyles} from "../../../../globalStyles/ProfileCardStyles";
import SuccessSVG from "../../../../assets/svg/Profile/SuccessSVG";
import InfoSVG from "../../../../assets/svg/Profile/InfoSVG";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import {AddAvatar} from "../../../UI/modals/Avatar/AddAvatar";
import {useSelector} from "react-redux";
import ProgressLine from "../../../UI/progressLine/ProgressLine";
import {LightTooltip} from "../../../../globalStyles/LightTooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import russianLocale from "moment/locale/ru";


const ProfileStatus = ({setShowModal, profile}) => {
    const classes = useProfileCardStyles();
    const [avatarPreview, setAvatarPreview] = useState();
    const {email, created_at, status, phone_status, img_path, name} = profile;

    useEffect(() => {
        //console.log(moment(created_at).format('LL'))
    }, [])

    return (
        <Card sx={{boxShadow: 2}} className={classes.root}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h6"}>Статус профиля</Typography>
            </Box>


            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Box style={{display: "flex", alignItems: "center"}}>
                    {/*<Avatar style={{marginRight: 10, width: '50px', height: '50px'}}/>*/}
                <AddAvatar avatarPreview={avatarPreview} setAvatarPreview={setAvatarPreview}/>

                <Box>
                    <div  style={{display: "flex", alignItems: "center"}}>
                        <Typography variant={"h6"}>{name}</Typography>
                        <InfoSVG size={8} color={"#4B9A2D"} margin={"-5px 0 0 5px"}/>
                    </div>
                    <Box style={{display: "flex", alignItems: "center", flexWrap: 'wrap'}}>
                        <Rating style={{color: "#FFF066"}} size={'small'} name="half-rating-read" defaultValue={4}
                                readOnly precision={0.5}/>
                        <Typography style={{whiteSpace: 'nowrap'}} variant={'h4'}>(3 отзывов)</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography variant={"h5"}
                        component="div">
                {email ? <><SuccessSVG/>
                    Эл. почта подтверждена</>  : <><InfoSVG /> Эл. почта не подтверждена </> }

            </Typography>
            <LightTooltip title="Нажмите, чтобы подтвердить номер телефона" placement="bottom-start" arrow>
            <Typography variant={"h5"} component="div" className={classes.textBtn}
                        onClick={() => setShowModal(true)}>
                {phone_status ? <><SuccessSVG/>
                    Номер подтвержден</>  : <><InfoSVG /> Номер не подтвержден </> }
            </Typography>
            </LightTooltip>
            <Typography variant={"h5"} component="div" >
                {status ? <><SuccessSVG/>
                    Профиль подтвержден</>  : <><InfoSVG /> Профиль не подтвержден </> }
            </Typography>
            {status === 'executor' && <ProgressLine persent={67}/>}
            <Typography variant="caption" style={{fontStyle:"italic", color:"#808080"}}>В лиге с {moment(created_at).format('LL')}</Typography>
        </Card>
    );
};
export default ProfileStatus;
