import * as React from "react";
import {useInfoCardStyles} from "../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import PenSvg from "../../../../assets/svg/Profile/PenSvg";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";


const PersonalData = ({setEditPersonallyData}) => {
    const classes = useInfoCardStyles();
    const {status} = useSelector(state => state.auth)
    const {user} = useSelector(state => state.profile)
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
                {user?.gender}
            </Typography>
            <Typography variant={"h5"}>
                    Дата рождения
            </Typography>
              <Typography variant={'h6'}>
                  {moment(user?.birth_date ? user?.birth_date : "01/01/2022").format("DD/MM/YYYY")}
              </Typography>
            {status === 'executor' && <Box>
                <Typography style={{marginBottom: '10px'}} variant={"h5"}>
                    Обо мне
                </Typography>
                <Typography>
                    {user?.about_me ? user?.about_me : "" }
                </Typography>
            </Box>}

        </Card>
    )
};
export default PersonalData;
