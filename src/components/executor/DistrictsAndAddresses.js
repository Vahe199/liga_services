import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

const DistrictsAndAddresses = () => {
  return (
    <Box
      style={{
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "20px 50px",
        width: "40%",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace: "nowrap" }}>
        Районы и адреса
      </p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <p style={{ color: "#808080", fontSize: "24px" }}>Регион</p>
      <p style={{ fontSize: "24px", fontWeight:'500px', marginBottom:'45px' }}>Москва</p>

      <p style={{ color: "#808080", fontSize: "24px" }}>Адреса</p>
      <p style={{ fontSize: "24px", fontWeight:'500px', marginBottom:'45px' }}>г. Москва, Любанский проезд, подъезд 3 квартира 42</p>
    
      <p style={{ color: "#808080", fontSize: "24px" }}>Районы выезда к клиентам</p>
      <p style={{ fontSize: "24px", fontWeight:'500px' }}>Бабушкинский, Восточное Измайлово,  Замоскворечье.....</p>
    
    </Box>
  );
};

export default DistrictsAndAddresses;
