import {makeStyles} from "@material-ui/core";

export const useOrderStyles = makeStyles({
    root:{
        //height:"100%",
        paddingTop: '90px',
        marginBottom: '70px',
        backgroundColor: '#e1e3e5',
        "& .MuiCard-root": {
            borderRadius: '20px',
            marginBottom: '20px',
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
            padding: '30px',
            margin: '20px',
        },
        "& .MuiTypography-h1":{
            fontWeight: 500,
            fontSize: 24,
            marginBottom: 10,
        },
        "& .MuiTypography-h2":{
            fontSize: 22,
            fontWeight: 500,
            //color: "#808080",
            //margin: '10px 0',
        },
        "& .MuiTypography-h3":{
            fontSize: 24,
            color: "#5A7287"
        },
        "& .MuiTypography-h4":{
            fontSize: 20,
        },
        "& .MuiButton-contained": {
            backgroundColor: '#EBEBEB',
            borderRadius: '10px',
            textTransform: "none",
            color: '#000',
            height: '50px',
            margin: '10px 0',
            "&:hover": {
                background: '#D9DADC !important',
            }
        },
    },
    radio: {
        '&$checked': {
            color: '#4B9A2D'
        },
    },
    checked: {},
    orderSubBlockSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})