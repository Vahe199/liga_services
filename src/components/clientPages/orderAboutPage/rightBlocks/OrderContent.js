import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import Card from "@mui/material/Card";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import mapImage from '../../../../assets/image/map.png';
import {imageData} from "../../../../utils/data/imagedata/ImageData";
import CustomImageList from "../../../UI/customimagelist/CustomImageList";
import Button from "@mui/material/Button";
import OrderContentForm from "../../ordersPage/blocks/OrderContentForm";


const OrderContent = ({meeting, setShowModal}) => {
    const classes = useOrderAboutStyles();
    const [showForm, setShowForm] = useState(false);
    return (
        <Card>
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box className={classes.inLineBlock2}>
                    <Typography variant={'h1'}>
                        Создание Сайтов. Помочь адаптировать скрипт для выгрузки Kibana (изначальный скрипт через Phyton, request) к новой выгрузке
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                        <Typography color={'#808080'} className={classes.inLineStyle} variant={'h4'}>Категория</Typography>
                        <Typography className={classes.inLineStyle}  variant={'h2'}>
                            Дистанционно
                        </Typography>
                        <Typography color={'#5A7287'} className={classes.inLineStyle}  variant={'h3'}>от 10000 руб.</Typography>
                </Box>
            </Box>
            <CustomDivider />
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box>
                    <Typography style={{marginBottom: '10px'}} color={'#808080'} variant={'h4'}>
                        Место встречи
                    </Typography>
                    <Typography variant={'h2'}>
                        {meeting === 'noDistant' ? 'У клиента' : 'Дистанционно'}
                    </Typography>
                </Box>
                {meeting === 'noDistant' && <Box style={{alignSelf: 'flex-end'}}>
                    <Typography color={'#808080'} className={classes.inLineStyle} variant={'h4'}>г. Москва, Любанский
                        проезд, подъезд 3 квартира 42
                    </Typography>
                </Box>}
            </Box>
            {meeting === 'noDistant' && <Box>
                <img style={{width: '100%'}} src={mapImage}/>
            </Box>}
            <CustomDivider />
            <Typography style={{marginBottom: '10px'}} variant={'h2'}>
                Когда
            </Typography>
            <Typography color={'#808080'} variant={'h4'}>
                15 нояб.(пн) - 30 дек. (чт), можно предложить свои даты
            </Typography>
            <CustomDivider />
            <Typography style={{marginBottom: '10px'}} variant={'h2'}>
                Описание
            </Typography>
            <Typography color={'#808080'} variant={'h4'}>
                Единый центр услуг - это удобный, динамично развивающийся Единый Сервис Красноярского края, который позволяет быстро и безопасно находить надёжных исполнителей для решения любых задач, услуг и поручений!
                Мы собрали для вас в одно место, опытных, проверенных, специалистов своего дела! Теперь каждый может вызвать любого специалиста по одному единому номеру!
            </Typography>
            <CustomImageList imageData={imageData} />
            {!showForm && <Box style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                <Button style={{width: '200px'}} onClick={() => setShowForm(true)} variant={'contained'}>
                    Откликнуться
                </Button>
            </Box>}
            {showForm && <OrderContentForm setShowModal={setShowModal} />}
        </Card>
    )

}
export default OrderContent;