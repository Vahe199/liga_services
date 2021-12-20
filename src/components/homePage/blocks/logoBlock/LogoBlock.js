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

const pages = ['Заказать обратный звонок', 'Задать вопрос', 'Blog'];



const LogoBlock = () => {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    const goNewPage = (page) => {
        console.log("ttytyty")
        navigate(page)
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
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Typography noWrap={true} margin={2}>
                            Заказать обратный звонок
                        </Typography>
                        <Typography noWrap={true} margin={2} onClick={(e)=>console.log(e.target.innerText,"ee")}>
                            Задать вопрос
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <LocationSvg />
                        </IconButton>
                        <Typography noWrap={true} margin={2}>
                            Краснодарский Край
                        </Typography>
                        <Typography noWrap={true} margin={2}>
                            Логин
                        </Typography>
                        <Typography noWrap={true} margin={2}>
                            Регистрация
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default LogoBlock;
