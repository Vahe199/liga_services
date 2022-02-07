import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";
import {DeleteSvg} from "../../../../assets/svg/DeleteSvg";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {useOrderStyles} from "../../../../globalStyles/OrderStyles";
import moment from 'moment';
import UserSvg from "../../../../assets/svg/header/UserSvg";


const OrderExecutorBlock = ({order, index, deleteOrder}) => {
    const classes = useOrderStyles();
    const navigate = useNavigate();
    let timeFromNow = moment(order?.created_at, "YYYYMMDD").fromNow();
    const task_starttime = moment(order.task_starttime).toDate();
    const task_finishtime = moment(order.task_finishtime).toDate();
    const start_time = moment(task_starttime).format(`DD MMM (ddd)`)
    const finsih_time = moment(task_finishtime).format(`DD MMM (ddd)`)

    return (
        <Box onClick={() => navigate(`/orderAboutPage/${order.id}`, {state: order})}>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Box style={{paddingRight: '5px'}}>
                        {order?.users?.img_path ? <Avatar src={`${process.env.REACT_APP_IMG_API}${order?.users?.img_path}`}/>
                            : <UserSvg />}
                    </Box>
                    <Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}>
                            <Typography style={{paddingRight: '5px'}} variant={'h2'}>{order?.users?.name}</Typography>
                            <OnlineSvg />
                        </Box>
                    </Box>
                </Box>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant={'h5'}>{timeFromNow}</Typography>
                    <Box onClick={() => deleteOrder(index)} style={{paddingLeft: '10px', cursor: 'pointer'}}>
                        <DeleteSvg />
                    </Box>
                </Box>
            </Box>
            <CustomDivider />

            <Box style={{marginBottom: '20px'}} className={order.status !== 'none' ? classes.orderSubBlockSpaceBetween : classes.singleBlock}>
                {order.status !== 'none' && <Box className={classes.wrapBox}>
                    <Typography variant={'h1'}>{order?.title}</Typography>
                    <Typography variant={'h3'} color={'#5A7287'}>от {order?.price_from} руб.</Typography>
                </Box>}
                <Box className={classes.wrapBox}>
                    <Typography variant={'h2'}>Категория</Typography>
                    <Typography className={classes.wrapRight} variant={'h5'}>{order?.category_name}</Typography>
                </Box>
            </Box>
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box style={{marginBottom: '10px'}} className={classes.inLineBlock2}>
                    <Typography color={order.status === 'default' && '#808080'} variant={'h4'}>
                        {order?.task_description}
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                    <Box>
                        <Typography className={classes.inLineStyle} variant={'h2'}>Место встречи</Typography>
                        <Typography className={classes.inLineStyle}  variant={'h5'}>
                            {order?.task_location}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.inLineStyle}  variant={'h2'}>Когда</Typography>
                        <Typography className={classes.inLineStyle} variant={'h5'}>
                            {start_time} - {finsih_time} можно предложить свои даты
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