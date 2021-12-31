import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Divider, IconButton, TextField, Typography} from "@mui/material";
import Rating from "@mui/material/Rating";
import {DownLoad2Svg} from "../../../../assets/svg/client/DownLoad2Svg";
import {useMyOrdersStyles} from "../MyOrders";
import MessengerSvg from "../../../../assets/svg/MessengerSvg";
import Avatar from "@mui/material/Avatar";
import {OnlineSvg} from "../../../../assets/svg/Profile/OnlineSvg";


const OrderBlock = ({order}) => {
    const classes = useMyOrdersStyles();
    const [reviewField, setShowReviewField] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    return (
        <Box>
            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box>
                    <Typography variant={'h5'}>
                        Категория: {order.status}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant={'h6'}>
                        Дата: 15 нояб.(пн) - 30 дек. (чт)
                    </Typography>
                </Box>

            </Box>
            <Divider color={'#808080'} style={{margin: '10px 0'}} />

            <Box className={classes.orderSubBlockSpaceBetween}>
                <Box className={classes.wrapBox}>
                    <Typography variant={'h4'}>Создание Сайтов</Typography>
                    <Typography style={{fontSize: '20px'}} color={'#5A7287'}>от 10000 руб.</Typography>
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
                                    <Button color="success" onClick={() => setShowReviewField(!reviewField)} variant="contained"
                                            color="success">
                                        Оставить отзыв
                                    </Button>
                                </Box>}
                                {order.status === 'onWorked' && <Button color="success" variant="contained" color="success">
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
                    <Divider color={'#808080'} style={{margin: '20px 0'}}/>
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
                        <Box>
                            <Divider color={'#808080'} style={{margin: '10px 0'}} />
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
                                    <button className={classes.btnDanger}>Отказатся</button>
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