import React from "react";
import OrderNotificationsEdit from "./OrderNotificationsEdit";
import OrderNotificationsData from "./OrderNotificationsData";


const OrderNotifications = ({notificationsOrder, openToaster, setOpenToaster, setNotificationOrders, profile}) => {
    const {geting_notification} = profile
    return (
        <>
            {notificationsOrder ? <OrderNotificationsEdit setOpenToaster={setOpenToaster} notificationsOrder={geting_notification} setNotificationOrders={setNotificationOrders}/>
                : <OrderNotificationsData geting_notification={geting_notification} setNotificationOrders={setNotificationOrders} profile={profile}/>}
        </>
    )
};
export default OrderNotifications;
