import React from "react";
import Box from "@mui/material/Box";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {makeStyles} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import {Rating} from "@mui/material";


const useStyles = makeStyles({
    root: {
        "& .MuiCard-root": {
            borderRadius: '10px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            margin: '10px',
            paddingBottom: '20px',
            height: 'auto',
        },
        "& .MuiTypography-h3": {
            fontWeight: 500,
            fontSize: 20,
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

const CustomerReviews = ({reviews}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography variant={'h3'}>
        Отзывы клиентов
      </Typography>
      {reviews.map((item, index) => (
        <Box style={{marginBottom: '20px'}} key={index}>
            <CustomDivider />
          <Box style={{ display: "flex", alignItems: "center", marginBottom: '20px' }}>
            <Avatar
              style={{ width: "70px", height: "70px", marginTop: "10px" }}
            />
            <Box style={{ paddingLeft: "20px" }}>
              <Typography style={{marginBottom: '10px'}} variant={'h4'}>{item.user_id.name}</Typography>
              <Rating defaultValue={item.executor_star_count_to_employer} readOnly size={'small'} style={{color: '#FFF066'}} />
            </Box>
          </Box>
          <Typography style={{marginBottom: '10px'}} variant={'h6'}>
              {item.employer_review_to_executor}
          </Typography>
          <Typography variant={'h5'}>Баллы</Typography>
            <Rating readOnly defaultValue={item.employer_star_count_to_executor} style={{color: '#FFF066', marginBottom: '30px'}} />
        </Box>
      ))}
    </Card>
  );
};

export default CustomerReviews;
