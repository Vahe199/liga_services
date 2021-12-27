import * as React from "react";
import {Divider, IconButton, Typography} from "@mui/material";
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";


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
                <Box onClick={() => {
                    setBtnSelected(index + 1)
                    setShowForm(false)
                }} style={{display:'flex'}}>
                    <Typography color='#000000' style={{fontWeight: btnSelected === index + 1 ? '500' : '400', whiteSpace:'nowrap', fontSize: '18px'}}>
                        {item}
                    </Typography>
                    <IconButton style={btnSelected === index + 1 ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}}>
                        <ArrowSvg/>
                    </IconButton>
                </Box>
            )}

        </Box>
    );
};


export default MyOrdersBlock;