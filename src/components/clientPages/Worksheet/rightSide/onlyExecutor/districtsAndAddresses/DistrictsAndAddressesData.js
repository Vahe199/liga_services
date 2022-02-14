import React from "react";
import Card from "@mui/material/Card";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";

const DistrictsAndAddressesData = ({editAddress, setEditAddress}) => {
    const classes = useInfoCardStyles();
    const regionsText = []
    const {profile = {}} = useSelector(state => state.profile);
    const {address="", region="",executor_working_regions=[]} = profile;
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box
                style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Районы и адреса
                </Typography>
                <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                     onClick={() => setEditAddress(true)}>
                    <PenSvg/>
                </Box>
            </Box>
            <CustomDivider />
            <Typography variant={"h5"}>
                Регион
            </Typography>
            <Typography variant={'h6'}>
                {region}
            </Typography>

            <Typography variant={"h5"}>Адреса</Typography>
            <Typography variant={'h6'}>{address}</Typography>

            <Typography variant={"h5"}>Районы выезда к клиентам</Typography>
            <div style={{display:"flex", flexWrap: 'wrap'}}>
            {executor_working_regions?.map((item,i) =>(
                <Typography variant={'h6'} style={{marginRight:5}}>{item?.executorwork_region}
                    {i !== executor_working_regions?.length -1 ? "," : ""}</Typography>
            ))}
            </div>
        </Card>
    // <Typography variant={'h6'} style={{marginRight:5}}>{item?.executorwork_region}
    //     {i < 2 ? i !== executor_working_regions?.length -1 ? "," : "" : '...'}</Typography>
    );
};

export default DistrictsAndAddressesData;
