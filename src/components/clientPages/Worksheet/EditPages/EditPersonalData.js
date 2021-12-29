import * as React from "react";
import {Box, FormControlLabel, IconButton, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {useEditCardStyles} from "./EditCardStyles";
import CustomDatePicker from "../../../UI/datePicker/CustomDatePicker";
import Card from "@mui/material/Card";
import {FileSVG} from "../../../../assets/svg/Profile/FileSVG";
import {useState} from "react";


const EditPersonalData = ({setEditPersonallyData}) => {
    const classes =useEditCardStyles()
    const [value, setValue] = React.useState('Женский');
    const [data, setData] = React.useState(new Date());
    const [save, setSave] = useState(false);
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Личные данные
                </Typography>
                <div onClick={() => {
                    setSave(!save)
                    setEditPersonallyData(false)
                }} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                    <FileSVG color={save? "#4b9a2d" : "#808080"}/>
                </div>
            </Box>

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
            <Box style={{width: '200px'}}>
                <CustomDatePicker value={data} fun={(val)=>setData(val)}/>
            </Box>


        </Card>
    )
};
export default EditPersonalData;
