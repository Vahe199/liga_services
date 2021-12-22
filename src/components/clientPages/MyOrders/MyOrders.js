import React from "react";
import {makeStyles} from "@material-ui/core";
const useMyOrdersStyles = makeStyles({
    root:{
        marginTop:78,
        height:500,
        backgroundColor:"#CFCFCF",
    }
})
export const MyOrders = () => {
    const classes = useMyOrdersStyles()
    return(
        <div>
            Мои заказы
        </div>
    )
}
