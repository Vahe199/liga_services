import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {useOrderAboutStyles} from "../../../../globalStyles/OrderAboutStyles";
import Card from "@mui/material/Card";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import mapImage from '../../../../assets/image/map.png';
import {imageData} from "../../../../utils/data/imagedata/ImageData";
import CustomImageList from "../../../UI/customimagelist/CustomImageList";
import Button from "@mui/material/Button";
import OrderContentForm from "../../ordersPage/blocks/OrderContentForm";
import Typography from "@mui/material/Typography";
import MapYandex from '../../../UI/map/Map'
import {useSelector} from "react-redux";


const OrderContent = ({setShowModal, state, finsih_time, start_time, setOpenToaster}) => {
    const classes = useOrderAboutStyles();
    const [showForm, setShowForm] = useState(false);
    const {profile} = useSelector(state => state.profile)
    const [yourTask, setYourTask] = useState(false)
    useEffect(() => {
        if(state.user_id !== profile.user_id){
            setYourTask(true)
        }else{
            setYourTask(false)
        }
    }, [state.user_id])
    console.log(state.user_id, profile.user_id, 'state')
    return (
        <Card>
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box className={classes.inLineBlock2}>
                    <Typography variant={'h1'}>
                        {state?.title ? state?.title : 'Нету'}
                    </Typography>
                </Box>
                <Box className={classes.inLineBlock}>
                        <Typography color={'#808080'} className={classes.inLineStyle} variant={'h4'}>Категория</Typography>
                        <Typography className={classes.inLineStyle}  variant={'h2'}>
                            {state?.task_location}
                        </Typography>
                        <Typography color={'#5A7287'} className={classes.inLineStyle}  variant={'h3'}>от {state?.price_from} руб.</Typography>
                </Box>
            </Box>
            <CustomDivider />
            <Box style={{marginBottom: '20px'}} className={classes.orderSubBlockSpaceBetween2}>
                <Box>
                    <Typography style={{marginBottom: '10px'}} color={'#808080'} variant={'h4'}>
                        Место встречи
                    </Typography>
                    <Typography variant={'h2'}>
                        {state?.task_location === 'client' ? 'У клиента' : 'Дистанционно'}
                    </Typography>
                </Box>
                {state?.task_location === 'client' && <Box style={{alignSelf: 'flex-end'}}>
                    <Typography color={'#808080'} className={classes.inLineStyle} variant={'h4'}>{state?.address}
                    </Typography>
                </Box>}
            </Box>
            {state?.task_location !== 'remotely' && <Box>
                <MapYandex />
            </Box>}
            <CustomDivider />
            <Typography style={{marginBottom: '10px'}} variant={'h2'}>
                Когда
            </Typography>
            <Typography color={'#808080'} variant={'h4'}>
                {start_time} - {finsih_time} можно предложить свои даты
            </Typography>
            <CustomDivider />
            <Typography style={{marginBottom: '10px'}} variant={'h2'}>
                Описание
            </Typography>
            <Typography color={'#808080'} variant={'h4'}>
                {state?.task_description}
            </Typography>
            <CustomImageList imageData={state?.image_tasks} show={false} />
            {yourTask && !showForm && <Box style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                <Button style={{width: '200px'}} onClick={() => setShowForm(true)} variant={'contained'}>
                    Откликнуться
                </Button>
            </Box>}
            {yourTask && showForm && <OrderContentForm setOpenToaster={setOpenToaster} state={state} setShowModal={setShowModal} />}
        </Card>
    )

}
export default OrderContent;