import React, {useEffect} from 'react'
import CustomOrders from "./CustomOrders";
import NotAppliedOrder from "./NotAppliedOrder";

const OrderList = ({order,
                       startTime,
                       finishTime,
                       showDetails,
                       setShowDetails,
                       openToaster,
                       setOpenToaster,
                       status}) => {

    return (
        status === 'notApplied' ? <NotAppliedOrder starTime={startTime}
                                                   showDetails={showDetails}
                                                    setShowDetails={setShowDetails}
                                                    finishTime={finishTime}
                                                    order={order} /> :
            <CustomOrders setShowDetails={setShowDetails}
                          finishTime={finishTime}
                          openToaster={openToaster}
                          showDetails={showDetails}
                          setOpenToaster={setOpenToaster}
                          status={status}
                          startTime={startTime}
                          order={order} />
    )
}

export default OrderList