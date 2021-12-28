import * as React from "react";
import {Avatar, Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useEditCardStyles} from "./EditCardStyles";
import {FileSVG} from "../../../../assets/svg/Profile/FileSVG";
import {useState} from "react";


const EditProfileData = ({setEdit}) => {
    const [save, setSave] = useState(false)
    const classes = useEditCardStyles()
    return (
        <Box sx={{boxShadow: 2}} className={classes.root}>
            <Box className={classes.titleWrap}>
                <div style={{display: "flex"}}>
                    <Typography variant={"h6"}>Действия профиля</Typography>
                    <div onClick={() => {
                        setSave(!save)
                        setEdit(false)
                    }} style={{cursor: "pointer", marginLeft: 20}}>
                     <FileSVG color={save? "#4b9a2d" : "#808080"}/>
                    </div>
                </div>
                <Typography style={{color: "#DF040A", fontSize: "14px"}}>
                    *Телефон не подтвержден
                </Typography>
            </Box>
            <Box style={{background:"#808080", height:2, marginBottom: "10px"}}/>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Avatar style={{marginRight: 25}}/>
                <Typography >Загрузите фотографию профиля</Typography>
            </Box>
            <Typography variant={"h5"} >
                Электронная почта
            </Typography>
            <Typography >
                example@gmail.com
            </Typography>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2, md: 4}}
            >
                <Box>
                    <Typography variant={"h5"}>
                        Номер телефона
                    </Typography>
                    <Typography>+7 999 999 9999 </Typography>
                </Box>
                <Box sx={{paddingTop:3}}>
                    <Stack
                        direction={{xs: 'column',sm: 'column',md:"row"}}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                    <Button sx={{ width:140}}
                            variant="outlined">Отправить код</Button>
                    <TextField placeholder={"Код"}  InputProps={{
                        classes: { input: classes.input}
                    }}
                               sx={{width:140, margin:"0px 15px"}}/>
                    <Button variant="contained" sx={{ width:140}} color="success">Подтвердить</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
export default EditProfileData;
