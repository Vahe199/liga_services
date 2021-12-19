import * as React from "react";
import UpperPartLeft from "./UpperPartLeft";
import UpperPartRight from "./UpperPartRight";
import Box from "@mui/material/Box";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
     "& .MuiButton-root":{
        backgroundColor: 'red',
        width: '400px',
        height: '500px'
     }
    },
    uper:{
       
    }
    
  });

const UpperPart = () => {
    const classes = useStyles();
    return (
            <Box className={classes.upper} style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', lineHeight:'28px'}}>
                <UpperPartLeft/>
                <UpperPartRight/>
            </Box>     
      )
      
  };
  export default UpperPart;
