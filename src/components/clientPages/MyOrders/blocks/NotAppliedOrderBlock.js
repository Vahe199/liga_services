import React, {useEffect, useState} from 'react'
import NotAppliedOrder from "./NotAppliedOrder";
import NotAppliedOrderDetails from "./NotAppliedOrderDetails";
import moment from "moment";

const NotAppliedOrderBlock = ({starTime, order, finishTime}) => {

    const [showDetails, setShowDetails] = useState(0);
    const start_time = moment(starTime).format(`DD MMM (ddd)`)
    const finsih_time = moment(finishTime).format(`DD MMM (ddd)`)

    useEffect(() => {
        console.log(showDetails, order.id, 'showDetails')
    }, [order.id])

    return (
        showDetails === order.id ? <NotAppliedOrderDetails setShowDetails={setShowDetails}
                                                           starTime={start_time} finishTime={finsih_time}
                                                           order={order} /> :
        <NotAppliedOrder setShowDetails={setShowDetails}
                         order={order}
                         starTime={start_time}
                         finishTime={finsih_time} />
    )
}

export default NotAppliedOrderBlock