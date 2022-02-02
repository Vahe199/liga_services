import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CustomInput from "../../UI/customInput/CustomInput";
import {makeStyles} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
    root:{
        height:"100vh",
        paddingTop: '90px',
        marginBottom: '70px',
        backgroundColor: '#e1e3e5',
        "& .MuiCard-root": {
            borderRadius: '10px',
            marginBottom: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            margin: '20px',
        },
        "& .MuiTypography-h4":{
            fontWeight: 500,
            fontSize:20,
            whiteSpace: 'noWrap',
        },
        "& .MuiButton-outlined": {
            background: "#445E77",
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            borderRadius: '10px',
            width: '160px',
            marginBottom: '10px',
            "&:hover": {
                background: '#6585a5 !important',
            }
        },
    },
    containerSupport: {
        padding: '0 200px',
        margin: '70px 0 500px 0',
        '@media (max-width: 950px)' : {
            padding: '0',
        },
    },
    subContainerSupport: {
        padding: '0 100px',
        '@media (max-width: 1100px)' : {
            padding: '0'
        },
    },
})

const Support = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <Box className={classes.containerSupport}>
                    <Card>
                        <Typography style={{textAlign: 'center'}} variant={'h4'}>Служба поддержки</Typography>
                        <Divider color={'#808080'} style={{margin: '20px 0 40px 0'}} />
                        <Box className={classes.subContainerSupport}>
                        <Box style={{marginBottom:'30px'}}>
                            <CustomInput placeholder={'Email'}/>
                        </Box>
                            <CustomInput textArea={true} placeholder={'Сообщение'}/>
                        </Box>
                        <Box style={{display:'flex', justifyContent:'center', paddingTop:'15px'}}>
                            <Button variant={'outlined'}>Отправить</Button>
                        </Box>

                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default Support;
