import React, {useEffect} from 'react'
import CustomOrders from "./CustomOrders";
import NotAppliedOrder from "./NotAppliedOrder";

const OrderList = ({order, startTime, finishTime, setShowDetails, status}) => {

    return (
        status === 'notApplied' ? <NotAppliedOrder starTime={startTime}
                                                    setShowDetails={setShowDetails}
                                                    finishTime={finishTime}
                                                    order={order} /> :
            <CustomOrders setShowDetails={setShowDetails}
                          finishTime={finishTime}
                          status={status}
                          startTime={startTime}
                          order={order} />
    )
}

export default OrderList