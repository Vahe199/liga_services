import * as React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from '@mui/material/Grid';
import InputsBar from "./InputsBar";
import RadioButtonsBar from "./RadioButtonsBar";
import IconBar from "./IconBar";



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
const ContainerBar = () => {
  const classes = useStyles();
  return(
    <Grid container spacing={3}>
    <Grid item xs={4}>
      <InputsBar/>
    </Grid>
    <Grid item xs={3}>
      <RadioButtonsBar/>
    </Grid>
    <Grid item xs={5}>
      <IconBar/>
    </Grid>
  </Grid>
  )
};
export default ContainerBar;

