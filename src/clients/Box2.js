import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DownloadSvg from "./DownloadSvg";
import MessengerSvg from "./MessengerSvg";

const Box2 = () => {
    return (
    <Box>
        <Box style={{fontSize:'28px', marginTop:'28px'}}>
           <Typography
            size="40px"
            noWrap
            component="div"
            color="#000000"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Место встречи
          </Typography>
        </Box>
        <Box style={{fontSize:'24px', marginBottom:'44px'}}>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#808080"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Дистанционно
          </Typography>
        </Box>
        <Box style={{fontSize:'24px'}}>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#000000"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Договор
          </Typography>
        </Box> 
<Box style={{display:'flex', fontSize:'24px',marginBottom:'50px'}}>
            <DownloadSvg/>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#808080"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Скачать файл
          </Typography>
</Box>

<Box style={{display:'flex', fontSize:'24px', marginBottom:'36px'}}>
            <MessengerSvg/>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#808080"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Написать исполнителю
          </Typography>
</Box>
    <Box style={{fontSize:'24px'}}>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#808080"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Подробнее
          </Typography>
    </Box>   
</Box>

      )
      
  };
  export default Box2;