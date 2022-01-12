import {makeStyles} from "@material-ui/core";

export const useChatStyles = makeStyles({
    root:{
        paddingTop: '80px',
        backgroundColor: '#e1e3e5',
        "& .MuiTypography-h1":{
            fontWeight: 500,
            fontSize: 18,
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
            fontSize: 16,
            //display: 'flex',
        },
        "& .MuiTypography-h5":{
            fontSize: 18,
            color: '#808080',
            display: 'flex',
        },
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '10px',
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '10px',
        },
        '@global': {
            '*::-webkit-scrollbar': {
                width: '0.3em'
            },
            '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px #C4C4C4'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: '#2C388A',
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: "1px solid #fff",
                borderRadius: '10px',
                //backgroundColor: '#fff',
                //width: '100%',
            },
            "&::placeholder": {
                color: "gray"
            },
            '&:hover fieldset': {
                border: "1px solid #fff",
            },
            '&.Mui-focused fieldset': {
                borderColor: '#fff',
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #fff",
                borderRadius: '10px',
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #fff",
                borderRadius: '10px',
            },
            //focus
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #fff",
            },
        },
    },
    userBlock: {
        display: "flex",
        padding: '10px 30px',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: '#EAEAEA',
        },
    },
    container: {
        marginVertical: 20,
        //justifyContent: 'flex-end',
    },
    messageBlock: {
        //backgroundColor: '#E5D4C6', //'rgba(229, 212, 198, 0.3)',
        padding: 15,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'flex-end',
        maxWidth: '85%',
    },
    textDate: {
        display: 'flex',
        alignSelf: 'flex-end',
        fontSize: 12
    },
    badge: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    inputField: {
        backgroundColor: '#D0D0D0',
        display: 'flex',
    },
    iconSvg: {
      padding: '10px',
      cursor: 'pointer',
    },
    input: {
        backgroundColor: '#fff',
        color: "#000",
        borderRadius: '10px',
    },
    //modal
    infoContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      position: 'absolute',
      zIndex: 4,
    },
    orderSubBlockSpaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    orderSubBlockSpaceBetween2: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    inLineBlock2: {
        width: '50%',
        '@media (max-width: 800px)' : {
            width: '100%',
        },
    },
    inLineBlock: {
        display: 'flex',
        alignSelf: 'flex-end',
        //width: '30%',
        '@media (max-width: 800px)' : {
            width: '100%',
        },
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
