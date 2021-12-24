import * as React from "react";
import { Typography ,Box} from "@mui/material";
import {useInfoCardStyles} from "./InfoCardStyles";


const PersonalData = () => {
    const classes =useInfoCardStyles()
    return (
        <Box sx={{ boxShadow: 2 }} className={classes.root}>
                <Typography className={classes.title}>
                    Личные данные
                </Typography>
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

        </Box>
    )
};
export default PersonalData;
