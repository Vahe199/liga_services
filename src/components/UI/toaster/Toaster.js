import React, {useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toaster = ({open, setOpen, message, error, success}) => {

    const status = success ? 'success' : 'error';

    useEffect(() => {
        console.log(message, 'message')
    }, [message, error, success, status])

    //console.log(status)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {

    }, [status])

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open}
                      autoHideDuration={6000}
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                      onClose={handleClose}>
                <Alert onClose={handleClose} severity={success ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {error ? "Произашло какое то ошибка" : message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default Toaster;
