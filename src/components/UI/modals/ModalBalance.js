import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {CloseSvg} from "../../../assets/svg/CloseSvg";
import IconButton from "@mui/material/IconButton";
import {useStyles} from "../../../globalStyles/ModalStyles";
import CustomInputIcon from "../customInput/CustomInputIcon";
import InputIcons from "./blocks/InputIcons";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const ModalBalance = ({showModal, setShowModal}) => {


    const handleClose = () => setShowModal(false);
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{borderRadius:'10px'}} sx={{ ...style ,width:{xs: 270, md: 400}}}>
                    <Box style={{textAlign: 'end'}}>
                        <IconButton onClick={handleClose}>
                            <CloseSvg />
                        </IconButton>
                    </Box>
                    <Box style={{padding: '0 20px'}}>
                        <Box style={{display: 'flex', justifyContent: 'center'}}>
                            <Typography style={{alignItems: 'center'}} className={classes.title}>
                                Недостаточно средств
                            </Typography>
                        </Box>
                        <Typography style={{ fontSize: "18px", marginTop: '20px' }}>Сумма</Typography>
                            <Box style={{margin: '20px 0'}}>
                                <CustomInputIcon
                                    iconRight={<InputIcons />}
                                />
                            </Box>
                            <Box style={{display: 'flex', justifyContent: 'center'}}>
                                <Button fullWidth variant={'contained'}>
                                    Пополнить
                                </Button>
                            </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalBalance;
