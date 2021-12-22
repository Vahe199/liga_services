import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {makeStyles} from "@material-ui/core";
import Logo from "../assets/image/logoSmall.png"
import UserSvg from "../assets/svg/header/UserSvg";
import NotificationSvg from "../assets/svg/header/NotificationSvj";
import MessageSvg from "../assets/svg/header/MessageSvg";
import {useNavigate} from "react-router-dom";
const pages = ['Мои заказы', 'Анкета', 'Поддержка'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const useNavStyles = makeStyles({
  root:{
   "& .MuiAppBar-root":{
     backgroundColor:"#fff"
   },
  },
  img:{
    width:80,
    height:78
  },
  text: {
    color:"#000000"
  },
    btn: {
        "&:hover": {
            background: '#445e77 !important',
        }
    }
});
export const MainNavBar = () => {
 const navigate = useNavigate()
  const classes = useNavStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    navigate(`/clientPage/${e.target.innerText}`)
    setAnchorElNav(e.target.innerText);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (<div className={classes.root}>
      <AppBar sx={{ boxShadow: 3}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' },color:"#e20613",alignItems:"center"}}
            >
              <img src={Logo} className={classes.img}/>
              Лига услуг
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="default"
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
                      <Typography  textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, color:"#e20613", display: { xs: 'flex', md: 'none' } }}
            >
                Лига услуг
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: anchorElNav === page ? '#445e77':'#000', display: 'block',textTransform: "none" }}
                  >
                    {page}
                  </Button>
              ))}
            </Box>
<Button className={classes.btn} sx={{background: "#445E77",textTransform: "none"}}
    variant="contained">Профиль исполнителя</Button>
            <Box sx={{ flexGrow: 0}}>
              <IconButton>
                <MessageSvg/>
              </IconButton>
              <IconButton sx={{marginRight:2}}>
                <NotificationSvg/>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/*<Avatar  src="/broken-image.jpg" />*/}
                  <UserSvg/>
                  <Typography  sx={{color:"#000",ml:2}}>Имя</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography  textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
  );
};
