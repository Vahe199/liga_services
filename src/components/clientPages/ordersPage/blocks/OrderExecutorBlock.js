import React from 'react';
import Box from "@mui/material/Box";
import {Divider, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";
import {useOrderStyles} from "../../../../globalStyles/OrderStyles";
import {DeleteSvg} from "../../../../assets/svg/DeleteSvg";
import {useNavigate} from "react-router-dom";


const OrderExecutorBlock = ({order, index, deleteOrder}) => {
    const classes = useOrderStyles();
    const navigate = useNavigate();
    return (
        <Box onClick={() => navigate(`/orderAboutPage/${order.id}`)}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Box style={{paddingRight: '5px'}}>
                        <Avatar />
                    </Box>
                    <Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}>
                            <Typography style={{paddingRight: '5px'}} variant={'h2'}>{order.name}</Typography>
                            <OnlineSvg />
                        </Box>
                    </Box>
                </Box>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant={'h5'}>5 минут назад</Typography>
                    <Box onClick={() => deleteOrder(index)} style={{paddingLeft: '10px', cursor: 'pointer'}}>
                        <DeleteSvg />
                    </Box>
                </Box>
            </Box>
            <Divider style={{margin: '20px 0'}} color={'#808080'}/>

            <Box style={{marginBottom: '20px'}} className={order.status !== 'none' ? classes.orderSubBlockSpaceBetween : classes.singleBlock}>
                {order.status !== 'none' && <Box className={classes.wrapBox}>
                    <Typography variant={'h1'}>Создание Сайтов</Typography>
                    <Typography variant={'h3'} color={'#5A7287'}>от 10000 руб.</Typography>
                </Box>}
                <Box className={classes.wrapBox}>
                    <Typography variant={'h2'}>Категория</Typography>
                    <Typography className={classes.wrapRight} variant={'h5'}>Разное</Typography>
                </Box>
            </Box>
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box className={classes.inLineBlock2}>
                    <Typography color={order.status === 'default' && '#808080'} variant={'h4'}>
                        Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                    <Box>
                        <Typography className={classes.inLineStyle} variant={'h2'}>Место встречи</Typography>
                        <Typography className={classes.inLineStyle}  variant={'h5'}>
                            Дистанционно
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.inLineStyle}  variant={'h2'}>Когда</Typography>
                        <Typography className={classes.inLineStyle} variant={'h5'}>
                            15 нояб.(пн) - 30 дек. (чт) можно предложить свои даты
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                {order.status === 'interested' && <Typography color={'#4C9B2D'} variant={'h4'}>
                    Клиенту интересно ваше предложение
                </Typography>}
                {order.status === 'showOrder' && <Typography color={'#4C9B2D'} variant={'h4'}>
                    Клиент увидел отклик
                </Typography>}
            </Box>
        </Box>
    )

}
export default OrderExecutorBlock;