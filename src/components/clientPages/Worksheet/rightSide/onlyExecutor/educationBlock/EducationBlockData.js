import React from "react";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CardTitle from "../../../../../UI/titles/CardTitle";
import {Box, Typography} from "@mui/material";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";

const EducationBlockData = ({ editEducationBlock, setEditEducationBlock }) => {
    const classes = useInfoCardStyles();

    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box
                style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Образование и сертификаты
                </Typography>
                <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                     onClick={() => setEditEducationBlock(true)}>
                    <PenSvg/>
                </Box>
            </Box>
            <CustomDivider />
            <Typography variant={"h5"}>Университет</Typography>
            <Typography variant={"h6"}>МГУ</Typography>
            <Typography variant={"h5"}>Сертификаты</Typography>
            <CustomImageList imageData={imageData} />
        </Card>
    );
};

export default EducationBlockData;