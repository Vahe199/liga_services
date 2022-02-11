import React from "react";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import Card from "@mui/material/Card";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";

const EducationBlockData = ({ editEducationBlock, setEditEducationBlock }) => {
    const classes = useInfoCardStyles();
    const {profile ={}} = useSelector(state => state.profile)
    const {executor_educations =[], executor_education_certificates=[]} = profile
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
            <Typography variant={"h6"}>{executor_educations[0]?.education_place}</Typography>
            <Typography variant={"h5"}>Сертификаты</Typography>
            <CustomImageList editPortfolio={false} education={true} imageData={executor_education_certificates} />
        </Card>
    );
};

export default EducationBlockData;
