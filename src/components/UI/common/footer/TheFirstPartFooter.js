import * as React from "react";
import {createStyles, makeStyles} from "@material-ui/core";



export const useStyles = makeStyles({
    first: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '37px',
    },
});


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
export default TheFirstPartFooter;

