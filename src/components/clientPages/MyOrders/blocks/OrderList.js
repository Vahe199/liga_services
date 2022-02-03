import React, {useEffect} from 'react'
import CustomOrders from "./CustomOrders";
import NotAppliedOrder from "./NotAppliedOrder";

const OrderList = ({order, startTime, finishTime, showDetails, setShowDetails, status}) => {

    return (
        status === 'notApplied' ? <NotAppliedOrder starTime={startTime}
                                                   showDetails={showDetails}
                                                    setShowDetails={setShowDetails}
                                                    finishTime={finishTime}
                                                    order={order} /> :
            <CustomOrders setShowDetails={setShowDetails}
                          finishTime={finishTime}
                          showDetails={showDetails}
                          status={status}
                          startTime={startTime}
                          order={order} />
    )
}

export default OrderList