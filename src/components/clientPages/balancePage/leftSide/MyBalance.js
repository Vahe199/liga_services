import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {useProfileCardStyles} from "../../../../globalStyles/ProfileCardStyles";
import SuccessSVG from "../../../../assets/svg/Profile/SuccessSVG";
import InfoSVG from "../../../../assets/svg/Profile/InfoSVG";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import {AddAvatar} from "../../../UI/modals/Avatar/AddAvatar";
import {useSelector} from "react-redux";
import ProgressLine from "../../../UI/progressLine/ProgressLine";
import {LightTooltip} from "../../../../globalStyles/LightTooltip";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import WalletSvg from "../../../../assets/svg/WalletSvg";
import Button from "@mui/material/Button";


const MyBalance = ({setShowModal}) => {
    const classes = useOrderAboutStyles();

    return (
        <Card sx={{boxShadow: 2}}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Typography variant={"h1"}>Счет баланса</Typography>
            </Box>
            <CustomDivider />
            <Typography style={{margin: '20px'}} variant={"h1"} component="div" >
                <WalletSvg />
                1000 руб.
            </Typography>
            <Button onClick={() => setShowModal(true)} fullWidth variant={'contained'}>
                Пополнить
            </Button>
        </Card>
    );
};
export default MyBalance;
