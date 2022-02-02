import React, {useState} from "react";
import {ArrowSvg} from "../../../../assets/svg/ArrowSvg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomDivider from "../../../UI/customDivider/CustomDivider";
import IconButton from "@mui/material/IconButton";
import {useDispatch} from "react-redux";
import {getCompletedTasks, getNotAppliedTasks} from "../../../../store/actions/TaskActions";


const MyOrdersBlock = ({setShowForm, setTitle}) => {
    const [btnSelected, setBtnSelected] = useState(1);
    const dispatch = useDispatch();
    const arr = ['Не откликнувшые заказы',
                'Откликнувшиеся исполнители',
                'Заказы в работе',
                'Завершенные заказы']

    const showOrders = async (item, index) => {
        setTitle({
            subtitle: item,
            index: index
        })
        setBtnSelected(index + 1)
        switch (index) {
            case 0:
                dispatch(getNotAppliedTasks())
                break;
            case 2:
                dispatch(getCompletedTasks())
                break;
        }
        setShowForm(false)
    }

    return (
        <Box>
            <Box>
                <Typography variant={'h4'}>
                    Заказы
                </Typography>
            </Box>
            <CustomDivider />

            {arr.map((item, index) =>
                <Box key={index} onClick={() => showOrders(item, index)} style={{display:'flex'}}>
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
