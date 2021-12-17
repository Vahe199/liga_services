import * as React from 'react';
import {Box, styled} from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Typography from "@mui/material/Typography";


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  //background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: '60%',
    bgcolor: '#E1E3E3',
    boxShadow: 'rgba(0, 0, 0, 0.2)',
    //border: '2px solid red',
    p: 2,
    px: 4,
    pb: 3,
    borderRadius: 10,
    height: '70%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
};

const ModalCategories = ({data, setItems}) => {
    //const [open, setOpen] = React.useState(true);
    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);

    return (
        <div>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                //BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    {data.map(item =>
                        <Typography> m={5}>{item}</Typography>
                    )}
                </Box>
            </StyledModal>
        </div>
    );
}

export default ModalCategories;
