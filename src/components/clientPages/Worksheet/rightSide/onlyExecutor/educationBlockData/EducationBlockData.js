import React, {useState} from "react";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CardTitle from "../../../../../UI/titles/CardTitle";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import CustomInputAddFile from "../../../../../UI/customInputAddFile/CustomInputAddFile";
import AddButton from "../../../../../UI/CustomButtons/AddButton";
import Typography from "@mui/material/Typography";

const EducationBlockData = ({ editEducationBlock, setEditEducationBlock }) => {
  const classes = useInfoCardStyles();
  const [state, setState] = useState({
    initial: false,
    basic: false,
    average: false,
    higher: false,
  });

  return (
    <Card sx={{ boxShadow: 2 }} className={classes.root}>
      <CardTitle
        title={"Образование и сертификаты"}
        condition={editEducationBlock}
        fun={setEditEducationBlock}
      />
      <Typography variant={"h5"}>Образование</Typography>
      
        <Typography variant={"h6"}>Высшее</Typography>
        
      <Typography variant={"h5"}>Образовательное учереждение</Typography>
      <Typography variant={"h6"}>МГУ</Typography>
      <Typography variant={"h5"}>Сертификаты</Typography>
      <CustomImageList imageData={imageData} />
      {editEducationBlock && <CustomInputAddFile svg={<AddButton />} />}
    </Card>
  );
};

export default EducationBlockData;
