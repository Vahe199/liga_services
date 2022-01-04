import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { useInfoCardStyles } from "../clientPages/Worksheet/InfoCard/InfoCardStyles";
import Checkbox from "@mui/material/Checkbox";
import CustomInput from "../UI/customInput/CustomInput";
import CustomImageList from "../UI/customimagelist/CustomImageList";
import { imageData } from "../../utils/data/imagedata/ImageData";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const EducationAndCertificatesEdit = () => {
  const classes = useInfoCardStyles();
  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography className={classes.title}>
          Образование и сертификаты
        </Typography>
      </Box>
      <Divider style={{ border: "1px solid #808080", width: "100%" }} />
      <Typography variant={"h5"}>Образование</Typography>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
           flexWrap:'wrap'
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography style={{margin: 0}} variant={"h6"}>Начальное общее</Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography style={{margin: 0}} variant={"h6"}>Основное общее</Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography style={{margin: 0}} variant={"h6"}>Среднее общее</Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Checkbox {...label} />
          <Typography style={{margin: 0}} variant={"h6"}>Высшее</Typography>
        </Box>
      </Box>
      <Typography variant={"h5"} style={{ marginBottom: "20px" }}>
            Образовательное учереждение
      </Typography>
      <Box style={{ width: "30%", marginBottom: "30px" }}>
        <CustomInput />
      </Box>
      <Typography variant={"h5"}>Сертификаты</Typography>
      <CustomImageList imageData={imageData} />
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" disabled>
          +
        </Button>
        <Typography
          variant={"h5"}
          style={{ padding: "15px 5px", paddingLeft: "15px" }}
        >
          Сертификаты
        </Typography>
      </Box>
    </Card>
  );
};

export default EducationAndCertificatesEdit;
