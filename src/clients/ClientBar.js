import * as React from "react";
import UpperPart from "./UpperPart";
import Box from "@mui/material/Box";
import MidlineBar from "./MidlineBar";
import BottomPart from "./BottomPart";

const ClientBar = () => {
    return (
        <Box>
            <Box>
                <UpperPart/>
            </Box> 

            <Box>
                <MidlineBar/>
            </Box> 
            <Box>
                <BottomPart/>
            </Box>
        </Box>
      )
      
  };
  export default ClientBar;


