import * as React from "react";
import { Box } from "@mui/system";
import {Button, Typography} from "@mui/material";
import {Divider, makeStyles} from "@material-ui/core";



const AddNewOrderBlock = ({setShowForm}) => {
    return (
        <Box>
            <Box>
                <Typography variant={'h4'}>
                    Оставить новый заказ
                </Typography>
            </Box>
            <Divider color={'#808080'} style={{margin: '20px 0'}}/>
                <Button onClick={() => setShowForm(true)} style={{width: '100%'}} variant="contained" color="success">+ Создать новый заказ</Button>
        </Box>
    );
};


export default AddNewOrderBlock;