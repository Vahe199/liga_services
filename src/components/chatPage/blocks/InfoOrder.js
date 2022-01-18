import React from 'react';
import {useChatStyles} from "../../../globalStyles/ChatStyles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const InfoOrder = ({showChatHeader}) => {
    const classes = useChatStyles();
    return (
        <Box style={{top: showChatHeader && '132px'}} className={classes.headerContainer} className={classes.infoContainer}>
            <Box className={classes.orderSubBlockSpaceBetween} style={{marginBottom: '20px'}}>
                <Box>
                    <Typography variant={'h1'}>Описание заказа</Typography>
                    <Typography variant={'h3'} color={'#5A7287'}>20000-50000 руб.</Typography>
                </Box>
                <Box>
                    <Typography color={'#808080'} variant={'h4'}>15 нояб.(пн) - 30 дек. (чт) можно предложить свои даты</Typography>
                </Box>
            </Box>
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box className={classes.inLineBlock2}>
                    <Typography color={'#808080'} variant={'h4'}>
                        Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                    <Box>
                        <Typography style={{fontWeight: 500}} color={'#445E77'} variant={'h4'}>Место встречи</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default InfoOrder;