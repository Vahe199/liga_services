import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import OrderBlock from "./blocks/OrderBlock";
import {OrdersData} from "../../../utils/data/orders/OrdersData";
import AddNewOrderBlock from "./blocks/AddNewOrderBlock";
import MyOrdersBlock from "./blocks/MyOrdersBlock";
import AddNewOrderForm from "./blocks/AddNewOrderForm";
import CustomDatePicker from "../../UI/datePicker/CustomDatePicker";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {getCompletedTasks, getNotAppliedTasks} from "../../../store/actions/TaskActions";
import Toaster from "../../UI/toaster/Toaster";

export const useMyOrdersStyles = makeStyles({
    root:{
        height: "100%",
        paddingTop: '70px',
        backgroundColor: '#e1e3e5',
        marginBottom: '70px',
        //paddingTop: '40px',
        "& .MuiTypography-h4":{
            fontWeight: 500,
            fontSize:20,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h5":{
            fontWeight: 500,
            fontSize:17,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h6":{
            color: "#808080",
            fontSize: 14,
            whiteSpace: 'noWrap',
            fontWeight: 400,
        },
        '& .MuiTypography-body1': {
            color: '#808080',
            fontSize: '14px',
        },

        //button
        "& .MuiButton-contained": {
            backgroundColor: '#4B9A2D',
            borderRadius: '10px',
        },
        "& .MuiButton-outlined": {
            background: "#445E77",
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            borderRadius: '10px',
            "&:hover": {
                background: '#6585a5 !important',
            }
        },
        //cardItem
        "& .MuiCard-root": {
            borderRadius: '20px',
            margin: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            '@media (max-width: 450px)' : {
                margin: '20px 0',
            },
        },
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
            width: '170px',
            borderRadius: '10px',
            border: '1px solid #808080',
            height: '45px',
            backgroundColor: '#fff',
        },
        //input
        '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
            marginBottom: '10px',
            width: '100%',
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '10px',
        },

        //select
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '10px',
        },
        //from
        "& .MuiOutlinedInput-input": {
            color: "#000",
        },
    },
    radio: {
        '&$checked': {
            color: '#4B9A2D'
        },
    },
    checked: {},

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 20px 0 20px',
        flexWrap: 'wrap',
    },
    datePickerBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    datepicker: {
        background: '#fff',
    },
    boxInput: {
        width: '100%',
        marginBottom: '18px',
    },
    boxInput2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '18px',
    },
    inputText: {
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        marginTop: '15px',
        marginBottom: '4px',
        color: '#000000',
    },
    input: {
        width: '100%',
        height: '16px',
        fontSize: '25px',
    },
    checkbox: {
        marginTop: '20px',
        alignSelf: 'flex-start',
        paddingLeft: '120px',
    },
    time: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        padding: '12px 42px',
        borderRadius: '10px',
        width: '150px',
        cursor: 'pointer',
    },
    orderSubBlockSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '10px',
    },
    orderSubBlockSpaceAround: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '10px',
    },
    wrapBox: {
        '@media (max-width: 450px)' : {
            width: '100%',
            marginBottom: '20px',
        },
    },
    wrapRight: {
        textAlign: 'right',
        '@media (max-width: 450px)' : {
            textAlign: 'left',
        },
    },
    btnDanger: {
        background: "#E54C51",
        color: '#fff',
        borderRadius: '10px',
        cursor: 'pointer',
        padding: '4px 12px',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        letterSpacing: '0.02857em',
        fontWeight: '600',
        "&:hover": {
            background: '#965A3E !important',
        }
    },
    containerSupport: {
      padding: '0 200px',
      margin: '70px 0 500px 0',
        '@media (max-width: 950px)' : {
            padding: '0',
        },
    },
    subContainerSupport: {
      padding: '0 100px',
        '@media (max-width: 1100px)' : {
            padding: '0'
        },
    },
})
export const MyOrders = () => {
    const classes = useMyOrdersStyles()
    const [valueTime, setValueTime] = useState(new Date());
    const [showForm, setShowForm] = useState(false);
    const {load, error, successWork, message} = useSelector(state => state.task)
    const [openToaster, setOpenToaster] = useState(false)
    const [title, setTitle] = useState('Не откликнувшые заказы');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotAppliedTasks())
    }, [])



    return(
        <Box className={classes.root}>
            <Container maxWidth={'lg'}>
                <Toaster error={error} success={successWork} message={message} open={openToaster} setOpen={setOpenToaster}/>
                <Grid container spacing={1} >
                    <Grid  item  sm={12}  lg={4}>
                        <Card>
                            <AddNewOrderBlock setShowForm={setShowForm} />
                        </Card>
                        <Card>
                            <MyOrdersBlock setTitle={setTitle} setShowForm={setShowForm} />
                        </Card>
                    </Grid>

                    <Grid  item sm={12} lg={8}>
                        {!showForm ? <Box>
                            <Box className={classes.header}>
                                <Typography variant={'h4'}>{title}</Typography>
                                <Box className={classes.datePickerBox}>
                                    <CustomDatePicker value={valueTime} fun={(val)=>setValueTime(val)}/>
                                </Box>

                            </Box>
                            {OrdersData.map((order, index) =>
                                <Card key={index}>
                                    <OrderBlock order={order}/>
                                </Card>
                            )}
                        </Box> : <Card> <AddNewOrderForm setOpenToaster={setOpenToaster} /> </Card>}

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
