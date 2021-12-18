import * as React from "react";
import UpperPartLeft from "./UpperPartLeft";
import UpperPartRight from "./UpperPartRight";
import Box from "@mui/material/Box";

const UpperPart = () => {
    return (
        <Box>
            <Box style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',padding:'130px,140px', lineHeight:'28px'}}>
                <UpperPartLeft/>
                <UpperPartRight/>
            </Box>   
        </Box>
        
      )
      
  };
  export default UpperPart;
