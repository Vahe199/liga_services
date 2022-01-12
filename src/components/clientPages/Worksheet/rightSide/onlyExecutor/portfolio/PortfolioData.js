import React from 'react';
import Card from "@mui/material/Card";
import {Box, Typography} from "@mui/material";
import {useInfoCardStyles} from "../../../../../../globalStyles/InfoCardStyles";
import PenSvg from "../../../../../../assets/svg/Profile/PenSvg";
import CustomDivider from "../../../../../UI/customDivider/CustomDivider";
import CustomImageList from "../../../../../UI/customimagelist/CustomImageList";
import {imageData} from "../../../../../../utils/data/imagedata/ImageData";


const PortfolioData = ({editPortfolio, setEditPortfolio}) => {
    const classes = useInfoCardStyles();
    return (
        <Card sx={{ boxShadow: 2 }} className={classes.root}>
            <Box
                 style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Typography className={classes.title}>
                    Портфолио
                </Typography>
                <Box style={{cursor: "pointer", padding: '0 0 7px 20px'}}
                     onClick={() => setEditPortfolio(true)}>
                    <PenSvg/>
                </Box>
            </Box>
            <CustomDivider />
            <Typography variant={"h5"}>
                Фотографии
            </Typography>
            <CustomImageList imageData={imageData} />
            <Typography variant={"h5"}>
                Ссылки
            </Typography>
            <Box>
                <Typography style={{marginBottom: '10px'}} variant={'h6'}>
                    https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
                </Typography>
                <Typography variant={'h6'}>
                    https://www.figma.com/file/L3cXWC6jCbT4VUn2GXKOPJ/
                </Typography>
            </Box>
            <Box>

            </Box>
        </Card>
    )
}

export default PortfolioData;