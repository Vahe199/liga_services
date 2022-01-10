import React from "react";
import {Box, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import DownloadFileSvg2 from "../../../../assets/svg/DownloadFileSvg2";
import IconButton from '@mui/material/IconButton';
import Card from "@mui/material/Card";
import AddButton from "../../../UI/CustomButtons/AddButton";
import CustomInputAddFile from "../../../UI/customInputAddFile/CustomInputAddFile";
import {DownloadSvg} from "../../../../assets/svg/DownloadSvg";

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
