import React from "react";
import {Box, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardTitle from "../../../../../UI/titles/CardTitle";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";

const DistrictsAndAddressesData = ({editAddress, setEditAddress}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box
                x style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Районы и адреса
                </Typography>
                <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                     onClick={() => setEditAddress(true)}>
                    <PenSvg/>
                </Box>
            </Box>
            <Typography variant={"h5"}>
                Регион
            </Typography>
            <Typography variant={'h6'}>
                    Москва
            </Typography>

            <Typography variant={"h5"}>Адреса</Typography>
            <Typography variant={'h6'}>г. Москва, Любанский проезд, подъезд 3 квартира 42</Typography>

            <Typography variant={"h5"}>Районы выезда к клиентам</Typography>
            <Typography variant={'h6'}>Бабушкинский, Восточное Измайлово, Замоскворечье.....</Typography>

        </Card>
    );
};

export default DistrictsAndAddressesData;
