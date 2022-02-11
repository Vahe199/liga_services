import React, {useEffect, useState} from 'react';
import moment from "moment";
import NotAppliedOrderDetails from "./NotAppliedOrderDetails";
import OrderList from "./OrderList";


const OrderBlock = ({order, status, openToaster, rejectLoadBtn, setOpenToaster}) => {


    const task_starttime = moment(order.task_starttime).toDate();
    const task_finishtime = moment(order.task_finishtime).toDate();
    const [showDetails, setShowDetails] = useState(0);
    const start_time = moment(task_starttime).format(`DD MMM (ddd)`)
    const finsih_time = moment(task_finishtime).format(`DD MMM (ddd)`)



    return (
        showDetails === order.id ? <NotAppliedOrderDetails setShowDetails={setShowDetails}
                                                           setOpenToaster={setOpenToaster}
                                                           starTime={start_time}
                                                           finishTime={finsih_time}
                                                           order={order}  />
            : <OrderList order={order}
                         rejectLoadBtn={rejectLoadBtn}
                         openToaster={openToaster}
                         setOpenToaster={setOpenToaster}
                         status={status}
                         finishTime={finsih_time}
                         setShowDetails={setShowDetails}
                         startTime={start_time} />
    )
}

export default OrderBlock;
