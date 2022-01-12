import React from "react";
import OrderNotificationsEdit from "./OrderNotificationsEdit";
import OrderNotificationsData from "./OrderNotificationsData";


const OrderNotifications = ({notificationsOrder, setNotificationOrders}) => {
    return (
        <>
            {notificationsOrder ? <OrderNotificationsEdit setNotificationOrders={setNotificationOrders}/>
                : <OrderNotificationsData setNotificationOrders={setNotificationOrders}/>}
        </>
    )
};
export default OrderNotifications;
