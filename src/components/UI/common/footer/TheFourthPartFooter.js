import * as React from "react";
import logo from '../../../../assets/image/logoSmall.png';
import FooterIconsBar from "./FooterIconsBar";
import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    fourth: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '37px',
    },
});

const TheFourthPartFooter = () => {
    const classes = useStyles();
  return (
         <div>
             <div>
             <img src={logo} alt="" />
             </div>
             <FooterIconsBar/>
             <p className={classes.fourth}>dolor sit amet
                 consectetur adipiscing 
                Suspendisse quis 
                fermentum lectus
             </p>
         </div>
    )
    
};
export default TheFourthPartFooter;











const TheFirstPartFooter = () => {
    const classes = useStyles();
  return (
         <div>
             <h1>Lorem ipsum</h1>
             <p className={classes.first}>dolor sit amet
                consectetur adipiscing 
                Suspendisse quis 
                fermentum lectus
                Curabitur vehicula tellus
                in enim temporat
                congue dui temporenatis
                variusollicitudin sem 
                iaculis iaculis.
            </p>
         </div>
    )
    
};


