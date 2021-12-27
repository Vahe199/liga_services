
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import {TextField, Typography} from "@mui/material";
import OrderBlock from "./blocks/OrderBlock";
import {OrdersData} from "../../../utils/data/orders/OrdersData";
import AddNewOrderBlock from "./blocks/AddNewOrderBlock";
import MyOrdersBlock from "./blocks/MyOrdersBlock";
import AddNewOrderForm from "./blocks/AddNewOrderForm";

export const useMyOrdersStyles = makeStyles({
    root:{
        height:"100%",
        marginBottom:70,
        paddingTop: '40px',
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
        //button
        "& .MuiButton-root": {
            backgroundColor: '#4B9A2D',
            borderRadius: '10px',
        },
        //cardItem
        "& .MuiCard-root": {
            borderRadius: '20px',
            marginBottom: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
        },
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
            width: '170px',
            borderRadius: '10px',
            border: '1px solid #808080',
            height: '45px',
            backgroundColor: '#fff',
        },
        //textArea
        '& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '10px',
            border: '1px solid #808080',
            height: '80px',
            width: '100%',
        },
        '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
            height: '100%',
            width: '100%',
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5px',
        marginBottom: '5px',
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
})
export const MyOrders = () => {
    const classes = useMyOrdersStyles()
    const [valueTime, setValueTime] = useState('');
    const [showForm, setShowForm] = useState(false);
    return(
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <Grid container spacing={4} >
                    <Grid  item xs={12} sm={12} md={4} lg={4}>
                        <Card>
                            <AddNewOrderBlock setShowForm={setShowForm} />
                        </Card>
                        <Card>
                            <MyOrdersBlock setShowForm={setShowForm} />
                        </Card>
                    </Grid>

                    <Grid  item sm={12} lg={8}>
                        {!showForm ? <Box>
                            <Box className={classes.header}>
                                <Typography variant={'h4'}>Завершенные заказы</Typography>
                                <Box className={classes.datePickerBox}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={valueTime}
                                            onChange={(date) => {
                                                setValueTime(date)
                                            }}
                                            hintText="Choose Date"
                                            autoComplete={'off'}
                                            renderInput={(params) => <TextField
                                                placeholder="Placeholder"
                                                {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Box>

                            </Box>
                            {OrdersData.map((order, index) =>
                                <Card key={index}>
                                    <OrderBlock order={order}/>
                                </Card>
                            )}
                        </Box> : <Card> <AddNewOrderForm /> </Card>}

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
