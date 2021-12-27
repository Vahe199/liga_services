import * as React from "react";
import {Box, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {useEditCardStyles} from "./EditCardStyles";
import CustomDatePicker from "../../../UI/common/datePicker/CustomDatePicker";


const EditPersonalData = () => {
    const classes =useEditCardStyles()
    const [value, setValue] = React.useState('Женский');
    const [data, setData] = React.useState(new Date());
    return (
        <Box sx={{ boxShadow: 2 }} className={classes.root}>
                <Typography className={classes.title}>
                    Личные данные
                </Typography>
            <Box style={{background:"#808080", height:2}}/>
                <Typography variant={"h5"}>
                    Пол
                </Typography>

            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            >
                <Stack
                    direction={{xs: 'column', sm: 'row'}}
                >
                <FormControlLabel value="Женский" control={<Radio size={"small"} sx={{
                    color: "#4B9A2D",
                    '&.Mui-checked': {
                        color: "#4B9A2D",
                    },
                }}/>} label="Женский" />
                <FormControlLabel value="Мужской" control={<Radio size={"small"} sx={{
                    color:"#4B9A2D",
                    '&.Mui-checked': {
                        color: "#4B9A2D",
                    },
                }}/>} label="Мужской" />
                </Stack>
            </RadioGroup>
            <Typography variant={"h5"} mb={1}>
                    Дата рождения
            </Typography>
             <CustomDatePicker value={data} fun={(val)=>setData(val)}/>

        </Box>
    )
};
export default EditPersonalData;
