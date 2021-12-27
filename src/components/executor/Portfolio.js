import React from "react";
import { Box, ImageList } from "@mui/material";
import { Divider } from "@mui/material";
import { ArrowSvg } from "../../assets/svg/AddSvg";
import { Grid } from '@mui/material';
import logo from "../../assets/image/Rectangle.jpg";


const Portfolio = () => {
  return (
    <Box style={{boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",borderRadius: "20px",padding: "20px 50px",width: "60%"}}>
      <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace: "nowrap" }}>
          Портфолио
      </p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />

      <Box style={{display:'flex', alignItems:'center'}}>
          <p style={{color: '#808080'}}>
              Фотогрфии
          </p>
          <ArrowSvg/>
      </Box>

      <Grid container spacing={1} style={{marginBottom:'50px'}}>
            <Grid item xs={12}  lg={3}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center',background: '#C4C4C4'}}>
                    <img src={logo} alt="" />
                </Box>   
            </Grid>
            <Grid item xs={12}  lg={3}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center',background: '#C4C4C4'}}>
                    <img src={logo} alt="" />
                </Box>   
            </Grid>
            <Grid item xs={12}  lg={3}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center',background: '#C4C4C4'}}>
                    <img src={logo} alt="" />
                </Box>   
            </Grid>
            <Grid item xs={12}  lg={3}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center',background: '#C4C4C4'}}>
                    <img src={logo} alt="" />
                </Box>   
            </Grid>
          </Grid>
          <p style={{color: '#808080'}}>
                Ссылки
          </p>
          <p>
          https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
          </p>
          <p>
          https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
          </p>
    </Box>
  );
};

export default Portfolio;
