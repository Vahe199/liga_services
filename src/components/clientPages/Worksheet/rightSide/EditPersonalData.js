import * as React from "react";
import {useEffect, useState} from "react";
import {useEditCardStyles} from "../styles/EditCardStyles";
import CustomDatePicker from "../../../UI/datePicker/CustomDatePicker";
import Card from "@mui/material/Card";
import {FileSVG} from "../../../../assets/svg/Profile/FileSVG";
import {useDispatch, useSelector} from "react-redux";
import CustomInput from "../../../UI/customInput/CustomInput";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import Stack from "@mui/material/Stack";
import {updatePersonalData} from "../../../../store/actions/ProfileDataActions";
import moment from "moment"
import {resetPartReducer} from "../../../../store/reducers/ProfileDataReducer";

const EditPersonalData = ({setEditPersonallyData,setOpenToaster}) => {
    const classes =useEditCardStyles()
    const dispatch = useDispatch()
    const {status} = useSelector(state => state.auth);
    const {user,successWork,error} = useSelector(state => state.profile);
    const [gender, setGender] = React.useState(user?.gender);
    const [data, setData] = React.useState(user?.birth_date);
    const [about, setAbout] = useState(user?.about_me ? user?.about_me : "");

    const executorData = {
        gender:gender,
        birth_date:moment(data).format("YYYY-MM-DD"),
        about_me:about
    }
    const clientData = {
        gender:gender,
        birth_date:moment(data).format("YYYY-MM-DD")
    }
    const sendData = status === 'executor' ? executorData : clientData
    const sendPersonalData = () => {
         dispatch(updatePersonalData(sendData))
    }
    useEffect(()=>{
        if(successWork){
            setEditPersonallyData(false)
            setOpenToaster(true)
            setTimeout(()=>{
                dispatch(resetPartReducer())
            },7000)
        }
        if(error){
            setOpenToaster(true)
            setTimeout(()=>{
                dispatch(resetPartReducer())
            },7000)
        }
    },[successWork, error])
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Личные данные
                </Typography>
                <div onClick={sendPersonalData} style={{cursor: "pointer", padding: '0 0 7px 20px'}}>
                    <FileSVG color={"#808080"}/>
                </div>
            </Box>

            <Box style={{background:"#808080", height:2}}/>
                <Typography variant={"h5"}>
                    Пол
                </Typography>

            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
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
            {status === 'executor' && <Box>
                <Typography mb={1} variant={"h5"}>
                    Обо мне
                </Typography>
                <CustomInput placeholder={'Обо мне'} value={about} handleChange={(e)=> setAbout(e.target.value)}/>
            </Box>}


        </Card>
    )
};
export default EditPersonalData;
