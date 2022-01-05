import React, {useEffect, useState} from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  img: {
      width: '100%',
    },
  },
);

const CustomImageList = ({imageData}) => {
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }

  const getColumns = (width) => {
    if (width < breakpoints.sm) {
      return 1
    } else if (width < breakpoints.md) {
      return 1
    } else if (width < breakpoints.lg) {
      return 4
    } else if (width < breakpoints.xl) {
      return 4
    } else {
      return 1
    }
  }

  const [columns, setColumns] = useState(getColumns(window.innerWidth))
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const classes = useStyles();
  return (
    <ImageList cols={columns} >
      {imageData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}`} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
 export default CustomImageList;

