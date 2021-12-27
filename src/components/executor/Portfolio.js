import React from "react";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import { ArrowSvg } from "../../assets/svg/AddSvg";
import CustomImageList from "../UI/common/customimagelist/CustomImageList";
import { imageData } from "../../utils/data/imagedata/ImageData";


const Portfolio = () => {
  return (
    <Box style={{boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",borderRadius: "20px",padding: "20px 50px",width: "60%"}}>
      <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace: "nowrap" }}>
          Портфолио
      </p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />

      <Box style={{display:'flex', alignItems:'center'}}>
          <p style={{color: '#808080', paddingRight: "20px"}}>
              Фотогрфии
          </p>
          <ArrowSvg />
      </Box>

      <CustomImageList imageData={imageData} />
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
