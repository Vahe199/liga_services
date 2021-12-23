import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import {TextField} from "@mui/material";
import OrderBlock from "./blocks/OrderBlock";
import {OrdersData} from "../../../utils/data/orders/OrdersData";
import AddNewOrderBlock from "./blocks/AddNewOrderBlock";
import MyOrdersBlock from "./blocks/MyOrdersBlock";

export const useMyOrdersStyles = makeStyles({
    root:{
        backgroundColor:"#CFCFCF",
        paddingTop: '40px',
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
    return(
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <Grid container spacing={4} >
                        <Grid  item sm={12} md={4} lg={4}>
                            <Card style={{borderRadius: '20px', marginBottom: '20px'}}>
                               <AddNewOrderBlock />
                            </Card>
                            <Card style={{borderRadius: '20px'}}>
                                <MyOrdersBlock />
                            </Card>
                        </Grid>

                        <Grid  item sm={12} md={8} lg={8} >
                            <Box className={classes.header}>
                                <p style={{fontWeight: '500'}}>Завершенные заказы</p>
                                <Box className={classes.datePickerBox}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={valueTime}
                                            onChange={(date) => {
                                                setValueTime(date)
                                            }}
                                            autoComplete={'off'}
                                            renderInput={(params) => <TextField
                                                {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Box>

                            </Box>
                            {OrdersData.map((order, index) =>
                                <Card key={index} style={{borderRadius: '20px', marginBottom: '20px'}}>
                                    <OrderBlock order={order} />
                                </Card>
                            )}

                        </Grid>
                </Grid>
            </Container>
        </div>
    )
}
