import React from "react";
import Divider from "@mui/material/Divider";
import DownloadFileSvg2 from "../../../../assets/svg/DownloadFileSvg2";
import Card from "@mui/material/Card";
import CustomInputAddFile from "../../../UI/customInputAddFile/CustomInputAddFile";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AdditionalFiles = () => {
  return (
    <Card>
      <Typography variant={'h2'}>Дополнительные файлы</Typography>
      <Divider color={'#808080'} style={{margin: "10px 0"}} />
      <Box style={{ paddingLeft: "20px" }}>
        <CustomInputAddFile
            label={'Word file.docx'}
            svg={<DownloadFileSvg2 />}
        />
        <CustomInputAddFile
            label={'PDF file.pdf'}
            svg={<DownloadFileSvg2 />}
        />
        <CustomInputAddFile
            label={'PDF file.pdf'}
            svg={<DownloadFileSvg2 />}
        />
        <CustomInputAddFile
            label={'PDF file.pdf'}
            svg={<DownloadFileSvg2 />}
        />
      </Box>
    </Card>
  );
};

export default AdditionalFiles;
