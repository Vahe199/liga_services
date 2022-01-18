import * as React from "react";
import {useInfoCardStyles} from "../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const PersonalData = ({setEditPersonallyData}) => {
    const classes = useInfoCardStyles();
    const {status} = useSelector(state => state.auth)
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
            <Typography variant={'h6'}>
                    Женский
            </Typography>
            <Typography variant={"h5"}>
                    Дата рождения
            </Typography>
              <Typography variant={'h6'}>
                  17/08/1990
              </Typography>
            {status === 'executor' && <Box>
                <Typography style={{marginBottom: '10px'}} variant={"h5"}>
                    Обо мне
                </Typography>
                <Typography>
                    Равным образом новая модель организационной деятельности играет важную роль в формировании систем
                    массового участия. Товарищи! рамки и место обучения кадров требуют определения и уточнения
                    соответствующий условий активизации. Равным образом сложившаяся структура организации представляет
                    собой интересный эксперимент проверки позиций, занимаемых участниками в отношении.
                    Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки
                    позиций, занимаемых участниками в отношении.
                </Typography>
            </Box>}

        </Card>
    )
};
export default PersonalData;
