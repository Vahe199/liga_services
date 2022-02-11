import React, {useEffect, useState} from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {makeStyles} from "@material-ui/core";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {CloseSvg} from "../../../assets/svg/CloseSvg";
export const useStyles = makeStyles({
  img: {
    "& .MuiImageListItem-img":{
      width:168,
      height:113,
    }
  },
  addBtn:{
    width:168,
      height:113,
      backgroundColor:"lightgray",
      fontSize:40,
      fontWeight:300,
    "&:hover": {
      background: '#C4C4C4',
    }
  }
});


const CustomImageList = ({imageData=[], remove,push,editPortfolio = true,education = false}) => {

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
  console.log(imageData,"imageData")
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
    <ImageList cols={columns} className={classes.img}>
      {imageData?.map((item,i) => (
        <ImageListItem key={i} >
          <img
               src={education ? item?.certificate_base : item?.portfoliopic_base}
               srcSet={education ? item?.certificate_base : item?.portfoliopic_base}
               alt={"title"}
               loading="lazy"/>
          {show && <ImageListItemBar
              sx={{
                background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              position="top"
              actionIcon={
                <IconButton onClick={()=>remove(i)}
                    sx={{ color: 'white' }}
                >
                 <CloseSvg color={"#fff"} size={12}/>
                </IconButton>
              }
              actionPosition="right"
          />}
        </ImageListItem>
      ))}
        {show && <ImageListItem>
            <input
                name={"photo"}
                accept="image/*"
                style={{display: "none"}}
                id="raised-button-file"
                multiple
                type="file"
                onChange={(e) => {
                    const fileReader = new FileReader();
                    fileReader.onload = () => {
                        if (fileReader.readyState === 2) {
                            // setFieldValue("photo", e.target.files[0]);
                            //   push(fileReader.result)
                            push(fileReader.result)
                            // console.log(fileReader.result, "e.target.files[0]")
                            // setAvatarPreview(fileReader.result);
                        }
                    };
                    if (e.target.files[0]) {
                        fileReader.readAsDataURL(e.target.files[0]);
                    }
                }}
            />
            <label htmlFor="raised-button-file">
                <Button className={classes.addBtn}
                        component="span"
                >
                    +
                </Button>
            </label>
        </ImageListItem>}
    </ImageList>
  );
};
 export default CustomImageList;

