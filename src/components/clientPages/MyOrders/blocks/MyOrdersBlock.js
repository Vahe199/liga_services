import React, {useEffect, useState} from "react";
import {Divider, IconButton, Typography} from "@mui/material";
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";
import Box from "@mui/material/Box";


const MyOrdersBlock = ({setShowForm}) => {
    const [btnSelected, setBtnSelected] = useState(1);
    const arr = ['Не откликнувшые заказы', 'Заказы в работе', 'Завершенные заказы', 'История заказов']

    useEffect(() => {
        console.log(btnSelected, 'btnSelected')
    }, [])
    return (
        <Box>
            <Box>
                <Typography variant={'h4'}>
                    Заказы
                </Typography>
            </Box>
            <Divider color={'#808080'} style={{margin: '20px 0'}}/>

            {arr.map((item, index) =>
                <Box key={index} onClick={() => {
                    setBtnSelected(index + 1)
                    setShowForm(false)
                }} style={{display:'flex'}}>
                    <p style={{fontWeight: btnSelected === index + 1 ? '500' : '400', color: '#000000', margin: 0, whiteSpace:'nowrap', fontSize: '18px'}}>
                        {item}
                    </p>
                    <IconButton style={btnSelected === index + 1 ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}}>
                        <ArrowSvg/>
                    </IconButton>
                </Box>
            )}

        </Box>
    );
};


export default MyOrdersBlock;
