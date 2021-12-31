import React from "react";
import {makeStyles} from "@material-ui/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {useMyOrdersStyles} from "../MyOrders/MyOrders";
import {Divider, Typography} from "@mui/material";
import CustomInput from "../../UI/common/customInput/CustomInput";
// const useSupportStyles = makeStyles({
//     root:{
//         marginBottom: 70,
//         height: '100%',
//     },
//     container: {
//
//     },
// })
const Support = () =>{
    const classes = useMyOrdersStyles();
    return(
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <Box className={classes.containerSupport}>
                    <Card>
                        <Typography style={{textAlign: 'center'}} variant={'h4'}>Служба поддержки</Typography>
                        <Divider color={'#808080'} style={{margin: '20px 0 40px 0'}} />
                        <Box className={classes.subContainerSupport}>
                            <CustomInput />
                            <CustomInput textArea={true} />
                        </Box>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default Support;
