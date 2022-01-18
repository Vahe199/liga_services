import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {makeStyles} from "@material-ui/core";
import {CircularProgress} from "@mui/material";


const useStyles = makeStyles({
    root: {
        "& .MuiButton-contained": {
            textTransform: "none",
            backgroundColor: '#445E77 !important',
            fontWeight: 500,
            borderRadius: '10px',
            //width: '160px',
            marginBottom: '10px',
        },
        '& .MuiButton-root': {
            "& .Mui-disabled":{
                backgroundColor: '#f08000 !important'
            }
        },
        "& .Mui-disabled": {
            backgroundColor: '#445e77c4 !important',
            color:"#fff !important"
        }
    },
});

const BlueButton = ({load, action, label, width}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} sx={{ m: 1}}>
            <Button
                startIcon={load && (
                    <CircularProgress
                        sx={{color: '#fff'}}
                        size={12}
                    />
                )}
                variant="contained"
                disabled={load}
                style={{width}}
                disabledStyle={{backgroundColor: 'yellow'}}
                onClick={action}
            >
                {load ? 'Загрузка...' : label}
            </Button>
        </Box>
    )
}

export default BlueButton;