import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom"
import {LocationSvg} from "../../../../assets/svg/header/LocationSvg";
import {useStyles} from "../../../../globalStyles/HomePageStyles";
import {useState} from "react";

const pages = [
    {
        name: 'Заказать обратный звонок',
        path: 'clientPage'
    },
    {
        name: 'Задать вопрос',
        path: 'clientPage'
    },
    {
        name: 'Логин',
        path: 'login'
    },
    {
        name: 'Регистрация',
        path: 'registration'
    },
];



const LogoBlock = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const goNewPage = (url) => {
        navigate(url)
    }

    return (
        <AppBar style={{ margin: 0 }} elevation={0} color={'transparent'} position="static">
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}} disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={() => goNewPage(page.path)}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Typography className={classes.item} style={{cursor: 'pointer'}} onClick={() => navigate('/clientPage')} noWrap={true} margin={2}>
                            Заказать обратный звонок
                        </Typography>
                        <Typography className={classes.item} noWrap={true} margin={2} onClick={(e)=>console.log(e.target.innerText,"ee")}>
                            Задать вопрос
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <LocationSvg />
                        </IconButton>
                        <Typography className={classes.item} noWrap={true} margin={2}>
                            Краснодарский Край
                        </Typography>
                        <Typography className={classes.item} onClick={() => navigate('/login')} noWrap={true} margin={2}>
                            Логин
                        </Typography>
                        <Typography className={classes.item} onClick={() => navigate('/registration')} noWrap={true} margin={2}>
                            Регистрация
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default LogoBlock;
