import * as React from "react";
import { Box } from "@mui/system";
import {Button, Typography} from "@mui/material";
import {Divider, makeStyles} from "@material-ui/core";



const AddNewOrderBlock = () => {
    return (
        <Box
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "20px",
                padding:"30px",
            }}>
            <Box>
                <Typography style={{fontWeight: 500, fontSize: '21px', whiteSpace:'nowrap', marginBottom:'25px'}}>
                    Оставить новый заказ
                </Typography>
            </Box>
            <Divider color={'#808080'} style={{margin: '20px 0'}}/>
                <Button style={{width: '100%'}} variant="contained" color="success">+ Создать новый заказ</Button>
        </Box>
    );
};


export default AddNewOrderBlock;