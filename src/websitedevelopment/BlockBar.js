import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import ContainerBar from "./ContainerBar";



const BlockBar = () => {

    return (
        
    <Box style={{boxShadow:' 4px 4px 10px rgba(0, 0, 0, 0.15)', borderRadius: '20px', padding:'25px', width:'70%'}}>
       <Header/> 
       <ContainerBar/>
   </Box>


      )
      
  };
  export default BlockBar;