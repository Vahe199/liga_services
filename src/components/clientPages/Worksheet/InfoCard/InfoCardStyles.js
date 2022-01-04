import {makeStyles} from "@material-ui/core";

export const useInfoCardStyles = makeStyles({
    root:{
        background: '#FFFFFF',
        borderRadius: "20px",
        padding: "26px 30px",
         margin:"20px 0",
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
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '10px',
        },
    },
    titleWrap:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title:{fontWeight: "500 !important",
        fontSize: '18px !important',
        marginBottom:'10px !important'},
    orderSubBlockSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})
