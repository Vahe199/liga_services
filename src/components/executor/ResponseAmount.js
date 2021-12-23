import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

const ResponseAmount = () => {
  return (
    <Box style={{boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",borderRadius: "20px",padding: "20px 50px",width: "40%",}}>
        <Box style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace:'nowrap' }}>
                 Сумма отклика
            </p>
            <p style={{ fontSize: "24px", fontWeight: 500 }}>
                 30 руб
            </p>
        </Box>
        <Divider style={{ border: "1px solid #808080", width: "100%" }} />
        <p style={{ fontSize: "22px", textAlign:'left' }}>
            Сумма за отклик списывается с вашего счета только при условии подтверждении заказчиком, вас в роли исполнителя.
        </p>
    </Box>
  );
};

export default ResponseAmount;
