import * as React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    line: {
      width:'100%',
      height:'60px',
      background:'#5A7287'
    },
});


const Line = () => {
    const classes = useStyles();
    return (
         <div className={classes.line}>
             
         </div>  
      )
      
  };
  export default Line;


