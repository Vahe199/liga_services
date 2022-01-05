import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import {useInfoCardStyles} from "./InfoCard/InfoCardStyles";
import PenSvg from "../../../assets/svg/Profile/PenSvg";
import {FileSVG} from "../../../assets/svg/Profile/FileSVG";
import EditButton from "../../UI/CustomButtons/EditButton";
import CustomSelect from "../../UI/selects/CustomSelect";
import CustomInput from "../../UI/customInput/CustomInput";
import SelectWithCheckbox from "../../UI/selects/SelectWithCheckbox";
import {options} from "../../../utils/data/selectWithCheckbox/DataSelectWithCheckbox";
import CardTitle from "../../UI/titles/CardTitle";

const DistrictsAndAddresses = ({editAddress, setEditAddress}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <CardTitle fun={setEditAddress}
                       condition={editAddress}
                       title={'Районы и адреса'}
                />
            <Typography variant={"h5"}>
                Регион
            </Typography>
            {!editAddress ? <Typography variant={'h6'}>
                    Москва
                </Typography> :
                <Box style={{width: '200px', marginBottom: '40px'}}>
                    <CustomSelect />
                </Box>}

            <Typography variant={"h5"} >Адреса</Typography>
            {!editAddress ? <Typography variant={'h6'}>г. Москва, Любанский проезд, подъезд 3 квартира 42</Typography> :
                <Box style={{width: '70%'}}>
                    <CustomInput />
                </Box>}

            <Typography variant={"h5"}>Районы выезда к клиентам</Typography>
            {!editAddress ? <Typography variant={'h6'}>Бабушкинский, Восточное Измайлово, Замоскворечье.....</Typography> :
                <Box style={{width: '200px', marginBottom: '40px'}}>
                    <SelectWithCheckbox options={options} />
                </Box>
            }

        </Card>
    );
};

export default DistrictsAndAddresses;
