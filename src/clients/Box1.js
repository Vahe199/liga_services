import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';


const Box1 = () => {
    return (
    <Box>
        <Box style={{fontSize:'28px'}}>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#000000"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Категория: Разное
          </Typography>
        </Box>
        <Box style={{fontSize:'28px', marginBottom:'35px'}}> 
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#5A7287"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            от 10000 руб.
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
            Исполнитель
          </Typography>
        </Box>
        <Box style={{fontSize:'28px'}}>
          <Typography
            size="40px"
            noWrap
            component="div"
            color="#000000"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Егор Крид
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
            Баллы
          </Typography>
        </Box>
        <Box>
        <Box>
           <Rating name="no-value" value={null} />
        </Box>
            <Button style={{background:'#4B9A2D', padding:'14px 24px', fontSize:'20px'}} variant="contained" disableElevation>
                Disable elevation
            </Button>
        </Box>
    </Box>

      )
      
  };
  export default Box1;