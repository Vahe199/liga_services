import React from "react";
import Card from "@mui/material/Card";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import WalletSvg from "../../../../assets/svg/WalletSvg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


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
