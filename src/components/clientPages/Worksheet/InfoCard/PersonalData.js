import * as React from "react";
import {Box, Typography} from "@mui/material";
import {useInfoCardStyles} from "./InfoCardStyles";
import Card from "@mui/material/Card";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";


const PersonalData = ({setEditPersonallyData}) => {
    const classes =useInfoCardStyles()
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Личные данные
                </Typography>
                <div onClick={() => {
                    setEditPersonallyData(true)
                }} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                    <PenSvg />
                </div>
            </Box>
            <Box style={{background:"#808080", height:2}}/>
                <Typography variant={"h5"}>
                    Пол
                </Typography>
            <Typography>
                    Женский
            </Typography>
            <Typography variant={"h5"}>
                    Дата рождения
            </Typography>
              <Typography>
                  17/08/1990
              </Typography>

        </Card>
    )
};
export default PersonalData;
