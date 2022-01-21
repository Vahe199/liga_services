import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    titleReview: {
        fontSize: '60px',
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: '14px',
    },
    textReview: {
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '33px',
    },
    aboutTitle: {
        color: '#445E77',
        fontSize: '40px',
        textAlign: 'center',
    },
    aboutText:{
        marginBottom:40,
    }
});

const PresentHistory = () => {
    const classes = useStyles();
    return (
        <>
        <Box mb={'60px'} style={{background: '#C2C9CF'}}>
            <Container maxWidth="lg">
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" >
                <Grid item xs={12} md={4}>
                    <Typography className={classes.titleReview} color={'#445E77'}>300+</Typography>
                    <Typography className={classes.textReview} color={'#000000'}>Активные заказы</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography className={classes.titleReview} color={'#445E77'}>1800+</Typography>
                    <Typography className={classes.textReview} color={'#000000'}>Опытные Специалиситы</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography className={classes.titleReview} color={'#445E77'}>9500+</Typography>
                    <Typography className={classes.textReview} color={'#000000'}>Выполненые заказы</Typography>
                </Grid>
            </Grid>
            </Container>
        </Box>
            <Container maxWidth="lg">
                <Typography mb={'50px'} className={classes.aboutTitle}>О нас</Typography>
                <Typography  className={classes.aboutText}>Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений! Мы собрали для вас в одно место, опытных, проверенных, специалистов своего дела! Тепер
               <br/><br/> Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений! Мы собрали для вас в одно место, опытных, проверенных, специалистов своего дела! Тепер</Typography>
                <Typography>Мы ценим ваше время!</Typography>
            </Container>
        </>
    )
}

export default PresentHistory;
