import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Divider, IconButton, TextField, Typography} from "@mui/material";
import Rating from "@mui/material/Rating";
import {DownLoad2Svg} from "../../../../assets/svg/client/DownLoad2Svg";
import {useMyOrdersStyles} from "../MyOrders";
import MessengerSvg from "../../../../assets/svg/MessengerSvg";


const OrderBlock = ({order}) => {
    const classes = useMyOrdersStyles();
    const [reviewField, setShowReviewField] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    return (
        <Box >
            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{width:'50%'}}>
                    <Typography variant={'h5'}>
                        Категория: Разное
                    </Typography>
                </Box>

                <Box style={{width:'50%', textAlign:'right'}}>
                    <Typography variant={'h6'}>
                        Дата: 15 нояб.(пн) - 30 дек. (чт)
                    </Typography>
                </Box>

            </Box>
            <Divider color={'#808080'} style={{margin: '10px 0'}} />

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ width:'50%'}}>
                    <Typography variant={'h4'}>Создание Сайтов</Typography>
                </Box>
                <Box style={{display:'flex', justifyContent:'flex-end', width:'50%'}}>
                    <Typography variant={'h5'}> Место встречи </Typography>
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center", marginBottom:'20px'}}>
                <Box style={{ width:'50%'}}>
                    <Typography style={{fontSize: '20px'}} color={'#5A7287'}>от 10000 руб.</Typography>
                </Box>
                <Box style={{display:'flex', justifyContent:'flex-end', width:'50%'}}>
                    <Typography variant={'h6'}> Дистанционно </Typography>
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-between",alignItems: "center", marginBottom: '20px'}}>
                <Box style={{ fontSize: "24px", color: "#808080",width:'50%'}}>
                    <Typography style={{textAlign: 'left', margin: 0}} variant={'h6'}>Исполнитель</Typography>
                    <Typography variant={'h5'}>
                        {order.status === 'UnResponded' ? 'Нету' : `${order.name} ${order.surName}`}
                    </Typography>
                </Box>
                <Box>
                    <Typography style={{textAlign: 'right'}} variant={'h5'}> Договор </Typography>
                    <Box>
                        <input
                            color="primary"
                            type="file"
                            //value={values.file}
                            //onChange={handleChange}
                            id="icon-button-file"
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            style={{ display: 'none' }}
                        />
                        <label style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', cursor: 'pointer'}} htmlFor="icon-button-file">
                            <DownLoad2Svg />
                            <Typography variant={'h6'} style={{margin: '0', paddingLeft: '20px'}}>Скачать файл</Typography>
                        </label>
                    </Box>
                </Box>
            </Box>

            {order.status === 'history' && <Box style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom: '20px'}}>
                <Box style={{width: '50%'}}>
                    <Typography variant={'h6'}>Ваш отзыв</Typography>
                    <Typography variant={'h5'}>Я довольна</Typography>
                </Box>
                <Box style={{width: '50%'}}>
                    {/*<Rating style={{color:"red"}} name="half-rating-read" defaultValue={4} precision={0.5} />*/}
                </Box>
            </Box>}

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{width:'50%'}}>
                    <Typography variant={'h6'}>Баллы</Typography>
                </Box>
                <Box style={{ width:'50%'}}>
                    {/*<Rating style={{color:"red"}} name="half-rating-read" defaultValue={4} precision={0.5} />*/}
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{marginBottom:'22px',width:'50%'}}>
                    <Rating style={{color: "#FFF066"}} name="half-rating-read" defaultValue={4} precision={0.5} />
                </Box>
                <Box style={{ display:'flex', justifyContent:'flex-end', width:'50%', alignItems: 'center'}}>
                    <IconButton>
                        <MessengerSvg />
                    </IconButton>
                    <Typography style={{textAlign: 'end', whiteSpace: 'nowrap'}} variant={'h6'}>
                        Написать исполнителю
                    </Typography>
                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "space-evenly",alignItems: "center"}}>
                <Box style={{ width:'50%'}}>
                    {order.status === 'onWorked' || order.status === 'history' ?  <Box>
                        {reviewField && <Box className={classes.boxInput}>
                            <TextField
                                variant={"outlined"}
                                multiline
                                autoComplete={'off'}
                                rows={2}
                                maxRows={4}
                            />
                        </Box>}
                        <Button onClick={() => setShowReviewField(!reviewField)} variant="contained" color="success">
                            Оставить отзыв
                        </Button>
                    </Box> : ''}

                </Box>
                <Box style={{display:'flex', justifyContent:'flex-end', width:'50%'}}>

                </Box>
            </Box>

            <Box style={{display: "flex",justifyContent: "flex-end", alignItems: "flex-end"}}>
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

        </Box>
    )

}
export default OrderBlock;