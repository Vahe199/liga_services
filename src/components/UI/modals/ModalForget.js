import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useStyles} from "../../../globalStyles/ModalStyles";
import HeaderModal from './blocks/HeaderModal';
import { useDispatch } from "react-redux";
import { Logouts } from '../../../store/actions/AuthActions';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 3,
};

const ModalForget = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                onClose={handleClose}
                aria-describedby="modal-modal-description"
                style={{border: 'none'}}
            >
                <Box sx={{ ...style ,width:{xs: 270, md: 400}}}>
                    <Box className={classes.root}>
                        <Box>
                            <Box className={classes.footer}>
                                {/* <p style={{textAlign: 'center', fontSize: '24px'}}>Вы действительно хотите выйди ? </p> */}
                                <Box style={{width:'50%',display:'flex',justifyContent:'space-between' }}>
                                    
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalForget;