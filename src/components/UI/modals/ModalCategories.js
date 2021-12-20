import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    modalContainer: {
        backgroundColor: '#E1E3E3',
        borderRadius: '20px',
        width: '50vw',
        padding: '20px',
        marginTop:-15
    },
    btn: {
        background: '#E1E3E3',
        padding: '15px',
        fontSize: '20px',
        fontWeight: 500,
        boxShadow: '0px 4px 7px #3e576c4d',
        borderRadius: '20px',
        color: '#000',
        height: '70px',
        //whiteSpace: 'nowrap',
        width: '340px',
        margin: '20px',
        //position: 'relative',
    },

});




const ModalCategories = ({setItems, data, setShowModal,category, showModal}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const handleRemove = (event) => {
        setAnchorEl(null);
        setOpen(false);
    };
    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div  onMouseLeave={handleRemove} onMouseEnter={handleClick}>
                    <Button  sx={{ boxShadow: '3' }} m={5} className={classes.btn}>
                        {category.name}
                    </Button>
                    <Popper id={id} open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper className={classes.modalContainer}>
                                    {category.subCategories.map((item, i) =>(<Typography key={i} sx={{p: 2}}>{item}</Typography>))}
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}

export default ModalCategories;




