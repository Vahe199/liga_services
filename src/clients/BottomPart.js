import * as React from "react";
import Box from "@mui/material/Box";
import Box1 from "./Box1";
import Box2 from "./Box2";

const BottomPart = () => {
    return (     
            <Box style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', lineHeight:'28px'}}>
                <Box1/>
                <Box2/>
            </Box>
      )
      
  };
  export default BottomPart;
