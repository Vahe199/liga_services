import React from 'react';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import {createStyles, makeStyles} from "@material-ui/core";
import Button from '@mui/material/Button'
import Box from "@mui/material/Box";
import {GreenArrowSvg} from "../../assets/svg/intro/GreenArrowSvg";
import Image from 'material-ui-image'
import CardMedia from '@mui/material/CardMedia';
import {GoToChatSvg} from "../../assets/svg/intro/GoToChatSvg";
//import vdsjv from '../../assets/image/LogoLarge.png'


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
        bottom: '0',
        right: '0',
    },
});


const Intro = () => {
    const classes = useStyles();
    return (
        <Grid mt={'20px'} mb={'80px'} container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography mb={'20px'} className={classes.title} color={'#445E77'}>ВСЕ СПЕЦИАЛИСТЫ ВАШЕГО ГОРОДА В ОДНОМ МЕСТЕ</Typography>
                <Button className={classes.btn}  size={'large'} variant="contained" color="success">
                    Оставить задание
                </Button>
                <Typography mb={'10px'} color={'#000'}>Опишите подробно проблему или задачу и мы подберем для вас исполнителя, или</Typography>
                <Typography mb={'20px'} style={{color: 'grey'}}>Выберите услугу из списка</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <GreenArrowSvg />
                    <Typography style={{color: 'grey', paddingLeft: 10}}>Стать исполнителем и начать зарабатывть</Typography>
                </Box>
            </Grid>
            <Grid style={{position: 'relative'}} item xs={12} md={6}>
                {/*<Box*/}
                {/*    component="img"*/}
                {/*    sx={{*/}
                {/*        height: 233,*/}
                {/*        width: 350,*/}
                {/*        maxHeight: { xs: 233, md: 167 },*/}
                {/*        maxWidth: { xs: 350, md: 250 },*/}
                {/*    }}*/}
                {/*    alt="The house from the offer."*/}
                {/*    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"*/}
                {/*/>*/}
                {/*<img src="LogoLarge.png" />*/}
                {/*<Image*/}
                {/*    src="../../assets/image/LogoLarge.png"*/}
                {/*/>*/}
                {/*<CardMedia*/}
                {/*    className={classes.img}*/}
                {/*    image={'../../assets/image/LogoLarge.png'}*/}
                {/*/>*/}
                <Box className={classes.chat}>
                    <GoToChatSvg />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Intro;
