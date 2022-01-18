import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


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