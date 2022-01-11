import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles({
    root: {
        display: 'flex',
        //input
        '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
            marginBottom: '10px',
            width: '100%',
        },
        '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '10px',
            border: '1px solid #808080',
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '10px',
        },
        //button
        '& MuiButtonBase-root-MuiButton-root': {
            backgroundColor: '#445E77',
            fontSize: '15px',
            color: '#FAFAFA',
            padding: '7px 24px',
            fontWeight: 500,
            marginBottom: '10px',
            borderRadius: '10px',
            width: '160px',
        },
        '& MuiButtonBase-root-MuiButton-root:hover': {
            backgroundColor: '#3a4e61',
        },
        //checkbox
        '& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label': {
            color: '#808080',
            fontSize: '16px',
        },
        "& .MuiButton-outlined": {
            background: "#445E77",
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            borderRadius: '10px',
            width: '160px',
            marginBottom: '10px',
            "&:hover": {
                background: '#6585a5 !important',
            }
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '@media (max-width: 1400px)' : {
            width: '70%'
        },
        '@media (max-width: 1000px)' : {
            height: '100vh',
            width: '100%',
        }
    },
    img: {
      height: '100vh',
        '@media (max-width: 1400px)' : {
            width: '100%'
        },
        '@media (max-width: 1000px)' : {
            display: 'none'
        }
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInput: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25px',
    },
    title: {
        color: '#445E77',
        fontWeight: '500',
        fontSize: '25px',
        marginBottom: '0',
    },
    inputText: {
      fontSize: '15px',
      textAlign: 'left',
      width: '70%',
      marginTop: '15px',
      marginBottom: '0',
    },
    input: {
        width: '70%',
        height: '16px',
        fontSize: '25px',
    },
    checkbox: {
      marginTop: '20px',
      alignSelf: 'flex-start',
      paddingLeft: '120px',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: '25px',
        width: '70%',
    }
});
