import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {useMyOrdersStyles} from "../MyOrders";
import MapYandex from "../../../UI/map/Map";
import moment from "moment";

const NotAppliedOrderDetails = ({order, starTime, finishTime, setOpenToaster, setShowDetails}) => {
    const classes = useMyOrdersStyles();
    return (
        <Box>
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
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box className={classes.inLineBlock2}>
                    <Typography variant={'h5'}>
                        {order.title}
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                    <Typography color={'#808080'} className={classes.inLineStyle} variant={'h6'}>Категория</Typography>
                    <Typography className={classes.inLineStyle}  variant={'h5'}>
                        {order.task_location}
                    </Typography>
                    <Typography color={'#5A7287'} className={classes.inLineStyle}  variant={'h5'}>от {order.price_from} руб.</Typography>
                </Box>
            </Box>
            <CustomDivider />
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box>
                    <Typography style={{marginBottom: '10px'}} variant={'h5'}>
                        Место встречи
                    </Typography>
                    <Typography variant={'h6'}>
                        {order.task_location === 'client' ? 'У клиента' : 'Дистанционно'}
                    </Typography>
                </Box>
                {order.task_location === 'client' && <Box style={{alignSelf: 'flex-end'}}>
                    <Typography className={classes.inLineStyle} variant={'h5'}>г{order.address}
                    </Typography>
                </Box>}
            </Box>
            {order.task_location === 'client' && <Box>
                <MapYandex />
            </Box>}
            <CustomDivider />
            <Typography style={{marginBottom: '10px'}} variant={'h5'}>
                Когда
            </Typography>
            <Typography color={'#808080'} variant={'h5'}>
                {starTime} - {finishTime} можно предложить свои даты
            </Typography>
            <CustomDivider />
            <Typography style={{marginBottom: '10px'}} variant={'h5'}>
                Описание
            </Typography>
            <Typography color={'#808080'} variant={'h6'}>
                {order.task_description}
            </Typography>
            {/*<CustomImageList imageData={imageData} />*/}
            <Box style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
                <Box>
                    <Typography onClick={() => setShowDetails(0)} style={{cursor: 'pointer', paddingLeft: '5px'}} variant={'h6'}>
                        Свернуть
                    </Typography>
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

export default NotAppliedOrderDetails