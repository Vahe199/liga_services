import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoSVG from "../../../assets/svg/Profile/InfoSVG";
import {FileSVG} from "../../../assets/svg/Profile/FileSVG";
import {Avatar, Stack, TextField} from "@mui/material";
import {useEditCardStyles} from "../../clientPages/Worksheet/styles/EditCardStyles";
import {useStyles} from "../../../globalStyles/ModalStyles";
import Divider from "@mui/material/Divider";
import {CloseSvg} from "../../../assets/svg/CloseSvg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '500px',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    border:"none",
    outline:"none",
    boxShadow: 24,
    p: 3,
};

const ModalPersonalData = ({showModal, setShowModal}) => {
    const classes = useStyles();
    const [showTimer, setShowTimer] = useState(true);
    const [currentCount, setCurrentCount] = useState(null);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const timer = () => setCurrentCount(currentCount - 1);

    useEffect(
        () => {
            if (currentCount <= 0) {
                setShowTimer(true)
                return;
            }
            if( currentCount == 1) {
                setShowTimer(false)
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        }, [currentCount]);
    const sendAgain = (newPas) =>{
        if(newPas){
            setShowTimer(false)
            setCurrentCount(180)
        }else {
            console.log(newPas,"new");
            setShowTimer(false)
            setCurrentCount(180)
        }
    }
    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style ,width:{xs: 270, sm: 400, md: 500}}}>
                    <Box className={classes.root}>
                        <Box className={classes.titleWrap}>
                            <Box style={{display: "flex", justifyContent: 'flex-end', width:{xs:"89%", sm: "70%", md:"70%"}}}>
                                <Typography variant={"h5"}
                                >Подтвердите телефонный номер</Typography>
                            </Box>
                            <Box onClick={handleClose}
                                 style={{cursor: "pointer"}}>
                                <CloseSvg size={15}/>
                            </Box>
                        </Box>
                        <Divider color={'#808080'} style={{ height: 1, margin: "10px 0px"}}/>
                        <Box>
                            <Box className={classes.defaultBlock}>
                                <TextField placeholder={"+7 (888) 888-88-88"}
                                           variant="standard"
                                           margin={"normal"}
                                           sx={{width:{xs: 140, sm: 290, md: 320}}}/>
                                <Stack direction={{ xs: 'column', sm: 'row' }}
                                       alignItems={'space-around'}
                                       spacing={{ xs: 1, sm: 2, md: 5}}>


                                    <TextField placeholder={"Код"} type="password" InputProps={{
                                        classes: { input: classes.input}
                                    }}
                                               sx={{width: 140}}/>
                                    {showTimer ?  <Button sx={{ width: 140}}
                                                          onClick={()=>sendAgain(true)}
                                                          variant="outlined">Отправить код</Button>:
                                        <Typography
                                            style={{width:140,fontSize:10}}>Отправить пароль еще раз через
                                            {' ' +Math.floor(currentCount / 60)+ ' ' + 'мин' + ' ' + ('0' + Math.floor(currentCount % 60)).slice(-2) + ' ' + 'сек'}
                                        </Typography>}
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
