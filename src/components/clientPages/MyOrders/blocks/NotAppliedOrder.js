import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {useMyOrdersStyles} from "../MyOrders";
import moment from 'moment';
import 'moment/locale/ru';


const NotAppliedOrder = ({order, starTime, finishTime, setShowDetails}) => {
    const classes = useMyOrdersStyles();

    return (
        <Box onClick={() => setShowDetails(order.id)}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box>
                    <Typography variant={'h5'}>
                        Заказ № {order.id},  Категория: {order.category_name}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant={'h6'}>
                        Дата: {moment(order.created_at).format(`DD MMM (ddd)`)}
                    </Typography>
                </Box>

            </Box>
            <CustomDivider />

            <Box style={{marginBottom: '20px'}} className={order.status !== 'none' ? classes.orderSubBlockSpaceBetween : classes.singleBlock}>
                {order.status !== 'none' && <Box className={classes.wrapBox}>
                    <Typography variant={'h4'}>{order.title}</Typography>
                    <Typography style={{fontSize: '20px'}} color={'#5A7287'}>от {order.price_from} руб.</Typography>
                </Box>}
                <Box className={classes.wrapBox}>
                    <Typography variant={'h5'}>Категория</Typography>
                    <Typography className={classes.wrapRight} variant={'h6'}>{order.subcategory_name}</Typography>
                </Box>
            </Box>
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box className={classes.inLineBlock2}>
                    <Typography color='#808080' variant={'h6'}>
                        {order.task_description}
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                    <Box>
                        <Typography className={classes.inLineStyle} variant={'h5'}>Место встречи</Typography>
                        <Typography className={classes.inLineStyle}  variant={'h6'}>
                            {order.task_location}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.inLineStyle}  variant={'h5'}>Когда</Typography>
                        <Typography className={classes.inLineStyle} variant={'h6'}>
                            {starTime} - {finishTime} можно предложить свои даты
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box>
                    <Typography style={{color: '#4C9B2D'}}>
                        Нет откликов
                    </Typography>
                </Box>

                <Box>
                    <Typography style={{color: '#E54C51', cursor: 'pointer'}} >
                        Удалить
                    </Typography>
                </Box>

            </Box>
        </Box>
    )

}
export default NotAppliedOrder;