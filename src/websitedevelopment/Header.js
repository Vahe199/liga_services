import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
<Box style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', width:'100%', marginBottom:'20px'}}>
    <Box style={{width:'50%',color:'#808080',display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
        <Box style={{display:'flex'}}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="17" fill="#C4C4C4"/>
            </svg>
        </Box>    
        <Box>
            <Typography style={{paddingLeft:'15px', color:'#000000', fontSize:'24px'}}>Елена</Typography>
        </Box>
        <Box style={{paddingLeft:'12px'}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#4B9A2D"/>
          <path d="M5 8L7.33333 10L12 6" stroke="white" stroke-linecap="round"/>
          </svg>
        </Box>
    </Box>


    <Box style={{color:'#808080', fontSize:'18px',width:'50%',display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
     <Typography style={{paddingRight:'18px'}}>5 минут назад</Typography>
     <Box>
         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13 13" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M13 1L0.999999 13" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
         </svg>
       </Box>
   </Box>
</Box>

<div style={{width:'100%', height:'1px', border: '1px solid #808080', marginBottom:'25px'}}>

</div>

</Box>
  );
};
export default Header;
