import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import IconBar from "./IconBar";
import TheFirstPartFooter from "./TheFirstPartFooter";
import TheSecondPartFooter from "./TheSecondPartFooter";
import ThirdPartFooter from "./ThirdPartFooter";
import TheFourthPartFooter from "./TheFourthPartFooter";
import Line from "./Line";


const useStyles = makeStyles({
  footer: {
    padding: "71px 200px 81px 200px",
  

    "& .MuiButton-root": {
      backgroundColor: "red",
      width: "400px",
      height: "500px",
    },
  },
});

const FooterBar = () => {
  const classes = useStyles();
  return (
    <>
    <Grid className={classes.footer} container spacing={9}>
      <Grid item xs={12} md={3} sm={6}>
        <TheFirstPartFooter />
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <TheSecondPartFooter />
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <ThirdPartFooter />
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <TheFourthPartFooter />
      </Grid>
    </Grid>
    <Line/>
    </>
  );
};
export default FooterBar;
