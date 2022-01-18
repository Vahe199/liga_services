import React from "react";
import { review } from "../../../../utils/data/review2/Review2";
import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "../../../UI/rating/Rating";
import Card from "@mui/material/Card";


const useStyles = makeStyles({
    root: {
        "& .MuiCard-root": {
            borderRadius: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            margin: '20px',
            paddingBottom: '20px',
            height: 'auto',
        },
        "& .MuiTypography-h3":{
            fontWeight: 500,
            fontSize:20,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h4":{
            fontWeight: 500,
            fontSize:17,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h5":{
            color: "#808080",
            fontSize: 16,
            whiteSpace: 'noWrap',
            fontWeight: 400,
        },
        "& .MuiTypography-h6":{
            color: "#000",
            fontSize: 16,
            fontWeight: 400,
            fontStyle: 'italic',
            whiteSpace: 'pre-wrap',
        },
    },
})

const CustomerReviews = () => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant={'h3'}>
        Отзывы клиентов
      </Typography>
      {review.map((item, index) => (
        <Box style={{marginBottom: '20px'}} key={index}>
          <CustomDivider />
          <Box style={{ display: "flex", alignItems: "center", marginBottom: '20px' }}>
            <Avatar
              style={{ width: "70px", height: "70px", marginTop: "10px" }}
            />
            <Box style={{ paddingLeft: "20px" }}>
              <Typography style={{marginBottom: '10px'}} variant={'h4'}>{item.name}</Typography>
              <Rating readOnly size={'small'} style={{color: '#FFF066'}} />
            </Box>
          </Box>
          <Typography style={{marginBottom: '10px'}} variant={'h6'}>
            Даже самое хмурое питерское утро может стать необыкновенно приятным,
            если завтракать в "Название". Большой полезный завтрак не только
            очень красиво, но еще и оооочень вкусно и сытно. А с десертами
            беда...невозможно остановиться на одном (выбор широкий, и все очень
            вкусные) И такое чудесное облако в интерьере!
          </Typography>
          <Typography variant={'h5'}>Баллы</Typography>
            <Rating style={{color: '#FFF066', marginBottom: '30px'}} />
        </Box>
      ))}
    </Card>
  );
};

export default CustomerReviews;
