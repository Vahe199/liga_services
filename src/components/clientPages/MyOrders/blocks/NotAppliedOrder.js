import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import moment from 'moment';
import 'moment/locale/ru';
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";
import IconButton from "@mui/material/IconButton";
import {deleteTask, getNotAppliedTasks, selectExecutor} from "../../../../store/actions/TaskActions";
import {useDispatch} from "react-redux";
import {resetPartReducer} from "../../../../store/reducers/TaskReducer";
import {useMyOrdersStyles} from "../MyOrders";


const NotAppliedOrder = ({order, starTime, setOpenToaster, finishTime, setShowDetails}) => {
    const classes = useMyOrdersStyles();
    const dispatch = useDispatch()




    const remove = async (id) => {
        //console.log(task_id, 'task_id', execuro_id, 'execuro_id')
        let formData = new FormData();
        formData.append("_method", 'delete');
        await dispatch(deleteTask({
            id, formData
        }))
        setOpenToaster(true)
        dispatch(getNotAppliedTasks())
        setTimeout(() => {
            dispatch(resetPartReducer())
        }, 7000)

    }


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

            <Box style={{marginBottom: '20px'}} className={order.status !== 'none' ? classes.orderSubBlockSpaceBetween : classes.singleBlock}>
                {order.status !== 'none' && <Box className={classes.wrapBox}>
                    <Typography variant={'h4'}>{order.title}</Typography>
                    <Typography style={{fontSize: '20px'}} color={'#5A7287'}>от {order.price_from} руб.</Typography>
                </Box>}
                <Box className={classes.wrapBox}>
                    <Typography className={classes.wrapRight} variant={'h5'}>Категория</Typography>
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
            <Box style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
                <Box>
                    <Typography onClick={() => setShowDetails(order.id)} style={{cursor: 'pointer', paddingLeft: '5px'}} variant={'h6'}>
                        Подробнее
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
                    <Typography onClick={() => remove(order.id)} style={{color: '#E54C51', cursor: 'pointer'}} >
                        Удалить
                    </Typography>
                </Box>

            </Box>
        </Box>
    )

}
export default NotAppliedOrder;