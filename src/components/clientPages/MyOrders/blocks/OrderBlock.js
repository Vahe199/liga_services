import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {DownLoad2Svg} from "../../../../assets/svg/client/DownLoad2Svg";
import {useMyOrdersStyles} from "../MyOrders";
import MessengerSvg from "../../../../assets/svg/MessengerSvg";
import Avatar from "@mui/material/Avatar";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import moment from "moment";
import NotAppliedOrderBlock from "./NotAppliedOrderBlock";


const OrderBlock = ({order}) => {
    const classes = useMyOrdersStyles();
    const [reviewField, setShowReviewField] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const task_starttime = moment(order.task_starttime).toDate();
    const task_finishtime = moment(order.task_finishtime).toDate();


    useEffect(() => {
        //console.log(order, 'order')
    }, [order])

    return (
        order.status === 'false' ? <NotAppliedOrderBlock starTime={task_starttime} finishTime={task_finishtime} order={order} /> :
        <Box>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box>
                    <Typography variant={'h5'}>
                        Заказ № {order.id} Категория: {order.category_name}

                    </Typography>
                </Box>

                <Box>
                    <Typography variant={'h6'}>
                        Дата: 15 нояб.(пн) - 30 дек. (чт)
                    </Typography>
                </Box>

            </Box>
            <CustomDivider />

            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box className={classes.wrapBox}>
                    <Typography variant={'h4'}>{order.title}</Typography>
                    <Typography style={{fontSize: '20px'}} color={'#5A7287'}>от {order.price_from} руб.</Typography>
                </Box>
                <Box className={classes.wrapBox}>
                    <Typography variant={'h5'}> Место встречи </Typography>
                    <Typography className={classes.wrapRight} variant={'h6'}> Дистанционно </Typography>
                </Box>
            </Box>

            {order.status !== 'UnResponded' ? <>
                <Box>
                    <Box className={classes.orderSubBlockSpaceBetween}>
                        <Box className={classes.wrapBox}>
                            <Typography variant={'h6'}>Исполнитель</Typography>
                            <Typography variant={'h5'}>
                                {order.status === 'UnResponded' ? 'Нету' : `${order.name} ${order.surName}`}
                            </Typography>
                        </Box>
                        <Box className={classes.wrapBox}>
                            <Typography style={{marginBottom: '10px'}} className={classes.wrapRight} variant={'h5'}> Договор </Typography>
                            <Box>
                                <input
                                    color="primary"
                                    type="file"
                                    //value={values.file}
                                    //onChange={handleChange}
                                    id="icon-button-file"
                                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    style={{display: 'none'}}
                                />
                                <label style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }} htmlFor="icon-button-file">
                                    <Box style={{paddingRight: '5px'}}>
                                        <DownLoad2Svg/>
                                    </Box>
                                    <Typography variant={'h6'} >Скачать
                                        файл</Typography>
                                </label>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.orderSubBlockSpaceBetween}>
                        <Box>
                            {order.status === 'history' && <Box style={{width: '50%'}}>
                                <Typography variant={'h6'}>Ваш отзыв</Typography>
                                <Typography variant={'h5'}>Я довольна</Typography>
                            </Box>}
                            {order.status !== 'onWorked' && <Typography variant={'h6'}>Баллы</Typography>}
                            {order.status !== 'onWorked' && <Rating style={{color: "#FFF066"}} name="half-rating-read" defaultValue={4}
                                     readOnly={order.status === 'history'} precision={0.5}/>}
                            <Box>
                                {order.status === 'finished' && <Box>
                                    {reviewField && <Box className={classes.boxInput}>
                                        <TextField
                                            variant={"outlined"}
                                            multiline
                                            autoComplete={'off'}
                                            rows={2}
                                            maxRows={4}
                                        />
                                    </Box>}
                                    <Button color="success" onClick={() => setShowReviewField(!reviewField)} variant="contained">
                                        Оставить отзыв
                                    </Button>
                                </Box>}
                                {order.status === 'onWorked' && <Button color="success" variant="contained">
                                    Завершить работу
                                </Button>}

                            </Box>
                        </Box>
                        <Box>
                            <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                {order.status !== 'history' && <><IconButton>
                                    <MessengerSvg/>
                                </IconButton>
                                    <Typography style={{textAlign: 'end', whiteSpace: 'nowrap'}} variant={'h6'}>
                                        Написать исполнителю
                                    </Typography>
                                </>}
                            </Box>
                        </Box>
                    </Box>

                </Box>

                <Box style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                    <Typography onClick={() => setShowInfo(!showInfo)} style={{cursor: 'pointer'}} variant={'h6'}>
                        {showInfo ? 'Свернуть' : 'Подробнее'}
                    </Typography>
                </Box>

                {showInfo && <Box>
                    <CustomDivider />
                    <Box style={{}}>
                        <Typography style={{cursor: 'pointer', whiteSpace: 'pre-wrap'}} variant={'h6'}>
                            Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края,
                            который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач,
                            услуг и поручений!
                        </Typography>
                        <Typography style={{cursor: 'pointer'}} variant={'h6'}>
                            Подробнее
                        </Typography>
                    </Box>
                </Box>}
            </> :
                <Box>
                    {order.executors.map((executor, index) =>
                        <Box key={index}>
                            <CustomDivider />
                            <Box className={classes.orderSubBlockSpaceBetween}>
                                <Typography variant={'h6'}>Исполнитель № 1</Typography>
                                <Typography variant={'h6'}>16:50 20/12/21</Typography>
                            </Box>
                            <Box className={classes.orderSubBlockSpaceBetween}>
                                <Box style={{display: 'flex'}}>
                                    <Box style={{paddingRight: '5px'}}>
                                        <Avatar />
                                    </Box>
                                    <Box>
                                        <Box style={{display: 'flex', alignItems: 'center'}}>
                                            <Typography style={{paddingRight: '5px'}} variant={'h4'}>{executor.name}</Typography>
                                            <OnlineSvg />
                                        </Box>
                                        <Box className={classes.orderSubBlockSpaceAround}>
                                            <Rating style={{color: "#FFF066"}} size={'small'} name="half-rating-read" defaultValue={4}
                                                    readOnly precision={0.5}/>
                                            <Typography variant={'h6'}>(3 отзывов)</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box style={{display: 'flex'}}>
                                    <Typography variant={'h6'}>Специальность:</Typography>
                                    <Typography style={{paddingLeft: '5px'}} variant={'h4'}>Маникюр</Typography>
                                </Box>
                            </Box>
                            <Box style={{margin: '10px 0'}}>
                                <Typography style={{whiteSpace: 'pre-wrap'}} variant={'h6'}>Комментария: Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!</Typography>
                            </Box>
                            <Box style={{display: 'flex', flexWrap: 'wrap', marginBottom: '20px'}}>
                                <Box style={{paddingRight: '50px'}}>
                                    <Typography variant={'h6'}>Предлогаемые сроки</Typography>
                                    <Typography variant={'h4'}>от 22.12.2021 до 28.12.2021</Typography>
                                </Box>
                                <Box>
                                    <Typography variant={'h6'}>Предлогаемая цена</Typography>
                                    <Typography variant={'h4'}>от 1000 руб. до 1800 руб.</Typography>
                                </Box>
                            </Box>
                            <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                <Box style={{paddingRight: '50px'}}>
                                    <span style={{paddingRight: '10px'}}>
                                        <Button color="success" variant={'contained'}>Выбрать</Button>
                                    </span>
                                    <Button style={{backgroundColor: '#E54C51'}} variant={'contained'}>Отказатся</Button>
                                </Box>
                                <Box>
                                    <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                        {order.status !== 'history' && <><IconButton>
                                            <MessengerSvg/>
                                        </IconButton>
                                            <Typography style={{textAlign: 'end', whiteSpace: 'nowrap'}} variant={'h6'}>
                                                Написать исполнителю
                                            </Typography>
                                        </>}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            }
        </Box>
    )

}
export default OrderBlock;
