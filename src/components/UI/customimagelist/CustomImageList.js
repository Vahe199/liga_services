import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  img1: {
    "@media (min-width: 2226px)": {
      padding: "0px",
    },
  },
});

const CustomImageList = (props) => {
  const classes = useStyles();
  return (
    <ImageList className={classes.img1} >
      {props.imageData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}`} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
 export default CustomImageList;

