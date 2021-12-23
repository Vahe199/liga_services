import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import DownloadFileSvg2 from "../../assets/svg/DownloadFileSvg2";
import IconButton from '@mui/material/IconButton';

const AdditionalFiles = () => {
  return (
    <Box
      style={{
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        padding: "20px 50px",
        width: "40%",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: 500, whiteSpace:'nowrap' }}>Дополнительные файлы</p>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <Box style={{ paddingLeft: "20px" }}>
        <Box
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconButton><DownloadFileSvg2 /></IconButton>
          <p style={{ fontSize: "22px", paddingLeft: "20px", cursor:'pointer' }}>
            Word file.docx
          </p>
        </Box>

        <Box style={{ display: "flex", alignItems: "center"}}>
          <IconButton><DownloadFileSvg2 /></IconButton>
          <p style={{ fontSize: "22px", paddingLeft: "20px", cursor:'pointer' }}>PDF file.pdf</p>
        </Box>

        <Box style={{ display: "flex", alignItems: "center" }}>
          <IconButton><DownloadFileSvg2 /></IconButton>
          <p style={{ fontSize: "22px", paddingLeft: "20px", cursor:'pointer' }}>PDF file.pdf</p>
        </Box>

        <Box style={{ display: "flex", alignItems: "center" }}>
          <IconButton><DownloadFileSvg2 /></IconButton>
          <p style={{ fontSize: "22px", paddingLeft: "20px", cursor:'pointer' }}>PDF file.pdf</p>
        </Box>
      </Box>
    </Box>
  );
};

export default AdditionalFiles;
