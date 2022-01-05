import React from "react";
// import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import {Card, Container, Divider, IconButton, makeStyles, Typography} from "@material-ui/core";
import { DataNotification } from "../../utils/DataNotification";
import { CloseSvg } from "../../assets/svg/CloseSvg";


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
        "& .MuiCard-root": {
            borderRadius: '20px',
            margin: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            '@media (max-width: 450px)' : {
                margin: '20px 0',
            },
        },
    },
      
})




const NotificationPage = (props) => {
    const classes = useStyles()
  

    



  return (
    <Container maxWidth={'lg'} className={classes.root}>
        <Box className={classes.containerSupport}>
        <Card className={classes.root}>
        {DataNotification.map((item, index)=>
        <>
            <p style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h6>{item.name}</h6>  
                <Box style={{display:'flex', alignItems:'center'}}>
                <h5 style={{color:'#616161', paddingRight:'50px',whiteSpace:'nowrap'}}>{item.data}</h5> 
                <IconButton>       
                    <CloseSvg/>
                </IconButton>
                </Box>
            </p> 
             <Divider style={{width:'100%', border: '1px solid #808080'}}/>
             </> 
        )}
    </Card>  
        </Box>
</Container>
  );
};

export default NotificationPage;
