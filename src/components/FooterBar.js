import * as React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from '@mui/material/Grid';
import IconBar from "./IconBar";
import TheFirstPartFooter from "./TheFirstPartFooter";
import TheSecondPartFooter from "./TheSecondPartFooter";
import ThirdPartFooter from "./ThirdPartFooter";
import TheFourthPartFooter from "./TheFourthPartFooter";




const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
   "& .MuiButton-root":{
      backgroundColor: 'red',
      width: '400px',
      height: '500px'
   }
  },
  inp:{

  }
});
const FooterBar = () => {
  const classes = useStyles();
  return(
    <Grid container spacing={4}>
    <Grid item xs={3}>
      <TheFirstPartFooter/>
    </Grid>
    <Grid item xs={3}>
      <TheSecondPartFooter/>
    </Grid>
    <Grid item xs={3}>
      <ThirdPartFooter/>
    </Grid>
    <Grid item xs={3}>
      <TheFourthPartFooter/>
    </Grid>
  </Grid>
  )
};
export default FooterBar;
