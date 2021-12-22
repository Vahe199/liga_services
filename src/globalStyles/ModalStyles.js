import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        //input
        // '& MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
        //   width: '100%',
        // },
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
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
            backgroundColor: '#445E77',
            fontSize: '15px',
            color: '#FAFAFA',
            padding: '7px 24px',
            fontWeight: 500,
            marginBottom: '10px',
            borderRadius: '10px',
            width: '190px',
            whiteSpace: 'noWrap',
        },
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root:hover': {
            backgroundColor: '#3a4e61',
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
        },
        //DatePicker
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
            width: '170px',
            borderRadius: '10px',
            border: '1px solid #808080',
            height: '45px',
        }
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
        marginBottom: '25px',
    },
    inputText: {
        fontSize: '15px',
        textAlign: 'left',
        width: '100%',
        marginTop: '15px',
        marginBottom: '4px',
    },
    input: {
        width: '100%',
        height: '16px',
        fontSize: '25px',
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
    }
});
