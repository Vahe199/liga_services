import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {IconButton} from "@mui/material";
import {useStyles} from "../../../globalStyles/ModalStyles";
import {CloseSvg} from "../../../assets/svg/CloseSvg";
import {useNavigate} from "react-router-dom";
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

const ModalLogOut = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{border: 'none'}}
            >
                <Box sx={{ ...style ,width:{xs: 270, md: 400}}}>
                    <Box className={classes.root}>
                        <Box>
                            <HeaderModal title={'Вы действительно хотите выйти ?'} close={handleClose}/>
                            <Box className={classes.footer}>
                                {/* <p style={{textAlign: 'center', fontSize: '24px'}}>Вы действительно хотите выйди ? </p> */}
                                <Box style={{width:'50%',display:'flex',justifyContent:'space-between' }}>
                                    <Button variant={'contained'} onClick={() => dispatch(Logouts())} style={{ cursor: 'pointer'}}>Да</Button>

                                    <Button onClick={handleClose} className={classes.exitModal}>Нет</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalLogOut;