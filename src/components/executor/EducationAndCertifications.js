import React from "react";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import CustomImageList from "../UI/customimagelist/CustomImageList";
import { imageData } from "../../utils/data/imagedata/ImageData";



const EducationAndCertifications = () => {
  return (
    <Box style={{boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",borderRadius: "20px",padding: "20px 50px",width: "50%"}}>
      <p style={{ fontSize: "24px", fontWeight: 500 }}>
            Образование и сертификаты
      </p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <p style={{color: '#808080'}}>
            Университет
      </p>
      <p style={{marginBottom:'35px'}}>
            Москва
      </p>
      <p style={{color: '#808080'}}>
            Сертификаты
      </p>

      <CustomImageList imageData={imageData} />

    </Box>
  );
};

export default EducationAndCertifications;
