import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import {useInfoCardStyles} from "./InfoCard/InfoCardStyles";
import PenSvg from "../../../assets/svg/Profile/PenSvg";
import {FileSVG} from "../../../assets/svg/Profile/FileSVG";

const DistrictsAndAddresses = ({editAddress, setEditAddress}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Районы и адреса
                </Typography>
                {editAddress ? <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}} onClick={() => setEditAddress(false)}>
                        <FileSVG color={'#808080'} />
                    </Box> :
                    <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}} onClick={() => setEditAddress(true)}>
                        <PenSvg />
                    </Box>}
            </Box>
            <Divider style={{ border: "1px solid #808080", width: "100%" }} />
            <Typography variant={"h5"}>
                Регион
            </Typography>
            <Typography variant={'h6'}>
                Москва
            </Typography>

            <Typography variant={"h5"} >Адреса</Typography>
            <Typography variant={'h6'}>г. Москва, Любанский проезд, подъезд 3 квартира 42</Typography>

            <Typography variant={"h5"}>Районы выезда к клиентам</Typography>
            <Typography variant={'h6'}>Бабушкинский, Восточное Измайлово, Замоскворечье.....</Typography>

        </Card>
    );
};

export default DistrictsAndAddresses;
