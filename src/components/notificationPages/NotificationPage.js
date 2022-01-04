import React from "react";
// import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import {Divider, makeStyles} from "@material-ui/core";
import { DataNotification } from "../../utils/DataNotification";


const useStyles = makeStyles({
    root:{
         height:"100%",
         marginBottom:100,
         "& .MuiTypography-h6":{
            fontWeight: 500,
            fontSize:18,
            marginBottom:10,
        },
        "& .MuiTypography-h5":{
            fontSize:18,
            color: "#808080",
            marginTop: 15
        },

    },

    background: '#FFFFFF',
        borderRadius: "20px",
        padding: "26px 30px",
         margin:"20px 0",
    
})

const NotificationPage = (props) => {
    const classes = useStyles()
  return (
    <Box className={classes.root}>

        {DataNotification.map((item, index)=>
            <p style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h6>{item.name}</h6>  <h5 style={{color:'#616161'}}>{item.data}</h5> 
                {/* <Divider style={{width:'100%', border: '1px solid #808080'}}/>  */}
            </p>  
           
        )}
        

    </Box>  
  );
};

export default NotificationPage;
