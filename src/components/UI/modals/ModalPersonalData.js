import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoSVG from "../../../assets/svg/Profile/InfoSVG";
import {FileSVG} from "../../../assets/svg/Profile/FileSVG";
import {Avatar, Stack, TextField} from "@mui/material";
import {useEditCardStyles} from "../../clientPages/Worksheet/EditPages/EditCardStyles";
import {useStyles} from "../../../globalStyles/ModalStyles";
import Divider from "@mui/material/Divider";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 3,
};

const ModalPersonalData = ({showModal, setShowModal}) => {
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const classes = useStyles();

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className={classes.root}>
                        <Box className={classes.titleWrap}>
                            <Box style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                                <Typography variant={"h5"}>Действия профиля</Typography>
                                <Box onClick={() => {
                                }} style={{cursor: "pointer", margin: '0 10px'}}>
                                    <FileSVG color={"#808080"}/>
                                </Box>
                            </Box>
                            <Typography style={{color: "#DF040A", fontSize: "14px", textAlign: 'right'}}>
                                *Телефон не подтвержден
                            </Typography>
                        </Box>
                        <Divider color={'#808080'} style={{ height: 1, marginBottom: "10px"}}/>
                        <Box>
                            <Box style={{marginBottom: '20px'}}>
                                <Typography variant={"h6"} >
                                    Электронная почта
                                </Typography>
                                <Typography variant={"h5"}>
                                    example@gmail.com
                                </Typography>
                            </Box>
                            <Box className={classes.defaultBlock}>
                                <Box style={{marginBottom: '20px', paddingRight: '20px'}}>
                                    <Typography variant={"h6"}>
                                        Номер телефона
                                    </Typography>
                                    <Typography variant={"h5"}>+7 999 999 9999 </Typography>
                                </Box>
                                <Stack direction={{ xs: 'column', sm: 'row' }}
                                       alignItems={'space-around'}
                                       spacing={{ xs: 1, sm: 2, md: 5 }}>
                                    <Button sx={{ width: 140}}
                                            variant="outlined">Отправить код</Button>
                                    <TextField placeholder={"Код"}  InputProps={{
                                        classes: { input: classes.input}
                                    }}
                                               sx={{width: 140}}/>
                                    <Button onClick={() => setShowModal(false)} variant="contained" sx={{width: 140, marginBottom: '20px'}} color="success">Подтвердить</Button>
                                </Stack>
                            </Box>
                        </Box>

                    </Box>


                </Box>
            </Modal>
        </div>
    );
}

export default ModalPersonalData;