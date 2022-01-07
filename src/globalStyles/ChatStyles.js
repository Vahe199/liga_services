import {makeStyles} from "@material-ui/core";

export const useChatStyles = makeStyles({
    root:{
        height:"100vh",
        paddingTop: '90px',
        marginBottom: '70px',
        backgroundColor: '#e1e3e5',
        "& .MuiTypography-h6":{
            fontWeight: 500,
            fontSize:18,
            marginBottom:10,
        },
        "& .MuiTypography-h5":{
            fontSize:18,
            color: "#808080",
            margin: '10px 0',
        },
        "& .MuiTypography-h4":{
            fontSize: 16,
            color: "#000",
            margin: '0',
            whiteSpace: 'wrap',
            fontWeight: 'normal',
            padding: '2px'
        },
        "& .MuiTypography-h3":{
            fontSize: 14,
            color: "#808080",
            margin: '5px 0 10px 0',
        },
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '10px',
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '10px',
        },
    },

})
