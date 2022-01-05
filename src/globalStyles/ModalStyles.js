import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        //input
        // '& MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
        //   width: '100%',
        // },
        '& .css-1sbn0x8-MuiInputBase-root-MuiOutlinedInput-root': {
                border: '2px solid green',
        },
        //texts
        "& .MuiTypography-h4":{
            fontWeight: 500,
            fontSize:20,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h5":{
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: 'noWrap',
        },
        "& .MuiTypography-h6":{
            color: "#808080",
            fontSize: 14,
            whiteSpace: 'noWrap',
            fontWeight: 400,
        },
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
        "& .MuiButton-contained": {
            backgroundColor: '#4B9A2D',
            borderRadius: '10px',
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
        },
        "& .MuiButton-outlined": {
            background: "#445E77",
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            borderRadius: '10px',
            "&:hover": {
                background: '#6585a5 !important',
            }
        },
        //checkbox
        '& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label': {
            color: '#808080',
            fontSize: '16px',
        },
        '& MuiBox-root css-0': {
            width: '40%',
        },
        //select
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
          padding: '10px',
        },
        //textArea
        '& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root': {
          borderRadius: '10px',
          border: '1px solid #808080',
            height: '73px',
        },
        '& MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '100%'
        },
        //DatePicker
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
            width: '170px',
            borderRadius: '10px',
            //border: '1px solid #808080',
            height: '45px',
        },
        //input file
        '& .MuiBox-root css-0': {
            width: '40%',
        },
    },
    titleWrap: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: '#445E77',
        fontWeight: '500',
        fontSize: '25px',
        margin: 0,
    },
    headerBlock: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    boxInput: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '18px',
    },
    inputText: {
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        marginTop: '15px',
        marginBottom: '4px',
    },
    input: {
        width: '160px',
        height: '1px !important',
        fontSize: '25px',
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            textAlign: "center"
        }
    },
    checkbox: {
        marginTop: '20px',
        alignSelf: 'flex-start',
        paddingLeft: '120px',
    },
    time: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      padding: '12px 42px',
      borderRadius: '10px',
      width: '150px',
        cursor: 'pointer',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        width: '100%',
    },
    btnBlock: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    defaultBlock: {
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 790px)' : {
            alignItems: 'flex-start',
            flexDirection: 'column',
        },
    },
    inputFilled:{
        width:320,
         height:35
    },
});
