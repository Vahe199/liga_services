import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import {DownLoad2Svg} from "../../../../assets/svg/client/DownLoad2Svg";
import Rating from "@mui/material/Rating";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MessengerSvg from "../../../../assets/svg/MessengerSvg";
import Avatar from "@mui/material/Avatar";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";
import {useMyOrdersStyles} from "../MyOrders";
import moment from "moment";
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";

const CustomOrders = ({order, setShowDetails, status}) => {
    const classes = useMyOrdersStyles();
    const [reviewField, setShowReviewField] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        console.log(status, 'statusinOrder')
    }, [])

    return (
        <Box>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant={'h5'}>
                        Заказ № {order.id} Категория: {order.category_name}
                    </Typography>
                    <Typography onClick={() => setShowDetails(order.id)} style={{cursor: 'pointer', paddingLeft: '5px'}} variant={'h6'}>
                        Подробнее
                    </Typography>
                </Box>

                <Box>
                    <Typography variant={'h6'}>
                        Дата: {moment(order.created_at).format(`DD MMM (ddd)`)}
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
                    <Typography className={classes.wrapRight} variant={'h6'}> {order.task_location === 'remotely' ? order.task_location : order.address} </Typography>
                </Box>
            </Box>

            {status !== 'applied' ? <>
                    <Box>
                        <Box className={classes.orderSubBlockSpaceBetween}>
                            <Box className={classes.wrapBox}>
                                <Typography variant={'h6'}>Исполнитель</Typography>
                                <Typography variant={'h5'}>
                                    name
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
                    {order?.click_on_tasks?.map((executor, index) => {
                            const task_starttime = moment(executor.startdate_from).toDate();
                            const task_finishtime = moment(executor.start_date_to).toDate();
                            const start_time = moment(task_starttime).format(`L`)
                            const finish_time = moment(task_finishtime).format(`L`)
                        return (
                            <Box key={index}>
                                <CustomDivider />
                                <Box className={classes.orderSubBlockSpaceBetween}>
                                    <Typography variant={'h6'}>Исполнитель № {index + 1}</Typography>
                                    <Typography variant={'h6'}>{moment(executor.created_at).format(`LT L`)}</Typography>
                                </Box>
                                <Box className={classes.orderSubBlockSpaceBetween}>
                                    <Box style={{display: 'flex'}}>
                                        <Box style={{paddingRight: '5px'}}>
                                            <Avatar />
                                        </Box>
                                        <Box>
                                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                                <Typography style={{paddingRight: '5px'}} variant={'h4'}>name</Typography>
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
                                    <Typography style={{whiteSpace: 'pre-wrap'}} variant={'h6'}>{executor.offer_to_employer}</Typography>
                                </Box>
                                <Box style={{display: 'flex', flexWrap: 'wrap', marginBottom: '20px'}}>
                                    <Box style={{paddingRight: '50px'}}>
                                        <Typography variant={'h6'}>Предлогаемые сроки</Typography>
                                        <Typography variant={'h4'}>от {start_time} до {finish_time}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant={'h6'}>Предлогаемая цена</Typography>
                                        <Typography variant={'h4'}>от {executor.service_price_from} руб. до {executor.service_price_to} руб.</Typography>
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
                        )
                    }
                    )}
                </Box>
            }
        </Box>
    )
}

export default CustomOrders