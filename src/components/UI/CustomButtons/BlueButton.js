import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {makeStyles} from "@material-ui/core";
import {CircularProgress} from "@mui/material";


const useStyles = makeStyles({
    root: {
        "& .MuiButton-contained": {
            textTransform: "none",
            fontWeight: 500,
            borderRadius: '10px',
            width: '160px',
            marginBottom: '10px',
        },
    },
});

const BlueButton = ({load, action, label}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} sx={{ m: 1, position: 'relative' }}>
            <Button
                variant="contained"
                disabled={load}
                onClick={action}
            >
                {label}
            </Button>
            {load && (
                <CircularProgress
                    size={24}
                    sx={{
                        color: '#4b9a2d',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                    }}
                />
            )}
        </Box>
    )
}

export default BlueButton;