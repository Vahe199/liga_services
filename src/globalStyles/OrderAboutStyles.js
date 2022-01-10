import {makeStyles} from "@material-ui/core";

export const useOrderAboutStyles = makeStyles({
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
            display: 'flex',
        },
        "& .MuiTypography-h2":{
            fontSize: 22,
            fontWeight: 500,
            display: 'flex',
        },
        "& .MuiTypography-h3":{
            fontSize: 24,
            color: "#5A7287",
            //display: 'flex',
        },
        "& .MuiTypography-h4":{
            fontSize: 20,
            //display: 'flex',
        },
        "& .MuiTypography-h5":{
            fontSize: 18,
            color: '#808080',
            display: 'flex',
        },
        "& .MuiButton-contained": {
            backgroundColor: '#4B9A2D',
            borderRadius: '5px',
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            '&:hover fieldset': {
                backgroundColor: '#478F2A',
            },
        },
        "& .MuiSwitch-track": {
            backgroundColor: '#4B9A2D'
        }
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
        //flexWrap: 'wrap',
    },
    orderSubBlockSpaceBetween2: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    inLineBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        //width: '30%',
        '@media (max-width: 800px)' : {
            width: '100%',
        },
    },
    inLineBlock2: {
        width: '70%',
        '@media (max-width: 800px)' : {
            width: '100%',
        },
    },
    inLineStyle: {
        textAlign: 'right',
        '@media (max-width: 800px)' : {
            textAlign: 'left',
        },
    },
    singleBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    wrapBox: {
        '@media (max-width: 450px)' : {
            width: '100%',
            marginBottom: '20px',
        },
    },
    wrapRight: {
        textAlign: 'right',
        '@media (max-width: 450px)' : {
            textAlign: 'left',
        },
    },
})