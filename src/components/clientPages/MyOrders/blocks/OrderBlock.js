import React, {useEffect, useState} from 'react';
import moment from "moment";
import NotAppliedOrderDetails from "./NotAppliedOrderDetails";
import OrderList from "./OrderList";


const OrderBlock = ({order, status}) => {


    const task_starttime = moment(order.task_starttime).toDate();
    const task_finishtime = moment(order.task_finishtime).toDate();
    const [showDetails, setShowDetails] = useState(0);
    const start_time = moment(task_starttime).format(`DD MMM (ddd)`)
    const finsih_time = moment(task_finishtime).format(`DD MMM (ddd)`)


    // useEffect(() => {
    //     console.log(status, 'status')
    // }, [showDetails])

    return (
        showDetails === order.id ? <NotAppliedOrderDetails setShowDetails={setShowDetails}
                                                           starTime={start_time}
                                                           finishTime={finsih_time}
                                                           order={order}  />
            : <OrderList order={order}
                         status={status}
                         finishTime={finsih_time}
                         setShowDetails={setShowDetails}
                         startTime={start_time} />
    )
}

export default OrderBlock;
