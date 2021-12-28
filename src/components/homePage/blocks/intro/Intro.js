import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import { makeStyles} from "@material-ui/core";
import Button from '@mui/material/Button'
import Box from "@mui/material/Box";
import LargeLogo from "../../../../assets/image/LogoLarge.png"
import {GreenArrowSvg} from "../../../../assets/svg/intro/GreenArrowSvg";
import {GoToChatSvg} from "../../../../assets/svg/intro/GoToChatSvg";
import ModalNewTask from "../../../UI/modals/ModalNewTask";
import Skeleton from '@mui/material/Skeleton';




export const useStyles = makeStyles({
    title: {
        fontSize: '40px',
        fontWeight: 700,
    },
    btn: {
        padding: '12px 78px',
        fontSize: '16px',
        marginBottom: '20px',
        display: 'block',
        fontWeight: 700,
    },
    chat: {
        position: 'absolute',
        bottom: -60,
        right: '0',
    },
    img:{
        width:"100%",
        height:"100%"
    },
       
});


const Intro = ({categoriesRef}) => {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);

    const scrollToCategories = () => {
        categoriesRef.current.scrollIntoView()
    }
    return (
        <Grid mt={'20px'} mb={'80px'} container spacing={2}>
            {showModal && <ModalNewTask
                showModal={showModal}
                setShowModal={setShowModal}
            />}
            <Grid item xs={12} md={6}>
                <Typography mb={'20px'} className={classes.title} color={'#445E77'}>ВСЕ СПЕЦИАЛИСТЫ ВАШЕГО ГОРОДА В ОДНОМ МЕСТЕ</Typography>
                <Button onClick={() => setShowModal(true)} className={classes.btn}  size={'large'} variant="contained" color="success">
                    Оставить задание
                </Button>
                <Typography mb={'10px'} color={'#000'}>Опишите подробно проблему или задачу и мы подберем для вас исполнителя, или</Typography>
                <Typography mb={'20px'} style={{color: 'grey'}}>Выберите услугу из списка</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{cursor: 'pointer'}} onClick={scrollToCategories}>
                      <GreenArrowSvg />
                    </span>
                    <Typography onClick={scrollToCategories} style={{color: 'grey', paddingLeft: 10, cursor: 'pointer'}}>Стать исполнителем и начать зарабатывть</Typography>
                </Box>
            </Grid>
            <Grid style={{position: 'relative'}} item xs={12} md={6}>
                <img src={LargeLogo} alt={"logo"} className={classes.img}/>
                <Box className={classes.chat}>
               
                    <GoToChatSvg />

                </Box>
            </Grid>
        </Grid>
    )
}

export default Intro;
