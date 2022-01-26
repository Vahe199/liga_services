import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Logo from "../../../assets/image/logoSmall.png"
import UserSvg from "../../../assets/svg/header/UserSvg";
import NotificationSvg from "../../../assets/svg/header/NotificationSvj";
import MessageSvg from "../../../assets/svg/header/MessageSvg";
import {useNavigate} from "react-router-dom";
import {Divider, Drawer, List, ListItem, ListItemText, Stack} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useDispatch, useSelector} from "react-redux";
import {changeStatus} from "../../../store/reducers/AuthReducer";
import Avatar from "@mui/material/Avatar";
import {getProfilePageData} from "../../../store/actions/ProfileDataActions";
import {makeStyles} from "@material-ui/core";
import {getExecutorPageData} from "../../../store/actions/ExecutorDataActions";
import {getHeaderData} from "../../../store/actions/HeaderActions";


const useNavStyles = makeStyles({
    root: {
        "& .MuiAppBar-root": {
            backgroundColor: "#fff",
        },
        "& .MuiButton-contained": {
            backgroundColor: '#4B9A2D',
            borderRadius: '10px',
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "& .MuiButton-outlined": {
            background: "#445E77",
            textTransform: "none",
            color: '#fff',
            fontWeight: 500,
            borderRadius: '10px',
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            "&:hover": {
                background: '#6585a5 !important',
            }
        },

    },
    "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":{
        backgroundColor:"#f08000 !important"
    },
  img:{
    width:80,
    height:78
  },
  text: {
    color: "#000000"
  },
    btn: {
        "&:hover": {
            background: '#6585a5 !important',
        }
    },
    nav:{
        height: "80vh !important",
        width: "300px !important",
        position: "absolute !important",
        top: "172 !important",
        left: "0 !important"
    },
    menu: {
        "& .MuiPaper-root": {
            height: "100vh",
            width: "300px",
            position: "absolute",
            top:"64px !important",
            left:"0 !important",
            borderRadius:" 0 4px 4px 0"
        }
    }
});
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export const MainNavBar = () => {
    const {status, user, auth} = useSelector(state => state.auth);
    const {success,profile} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const changePage = async () => {
        if(status === 'client'){
            await dispatch(getExecutorPageData())
            await dispatch(changeStatus('executor'))
            navigate('/', { replace: true })
        }else {
            dispatch(changeStatus('client'))
            navigate('/', { replace: true })
        }
    }


    useEffect(() => {
        console.log(status, 'status')
    }, [status])
 const navigate = useNavigate()
  const classes = useNavStyles()
  const pages = status === 'client' ? [
          {title:'Мои заказы',path:"MyOrders"},
          {title: 'Анкета', path: "workSheet"},
          {title:'Поддержка', path: "support"}] :
  [
      {title:'Баланс',path:"Balance"},
      {title: 'Заказы', path: "Orders"},
      {title:'Анкета',path:"workSheet"},
      {title:'Поддержка',path:"support"}];
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = React.useState("/");

  useEffect(()=>{
      if(auth && !success) {
          dispatch(getProfilePageData())
          dispatch(getHeaderData())
      }
  },[])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
     navigate(`${path}`)
     setAnchorElNav(false);
      setActive(path)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (<div className={classes.root}>
      <AppBar sx={{ boxShadow: 3}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
                variant={"h4"}
                onClick={() => navigate('/')}
                noWrap
                component="div"
                sx={{
                    mr: 2,
                    cursor: 'pointer',
                    fontSize: 18,
                    display: {xs: 'none', md: 'flex'},
                    color: "#e20613",
                    alignItems: "center"
                }}
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
                <Drawer
                    sx={{
                        width:250,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 250,
                            boxSizing: 'border-box',
                        },
                    }}
                    // variant="persistent"
                    anchor={'left'}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    <DrawerHeader>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, color:"#e20613",flexDirection:"column", display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={Logo} className={classes.img}/>
                            Лига услуг
                        </Typography>
                        <IconButton onClick={handleCloseNavMenu}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>

                    {pages.map((page, i) => (
                        <ListItem  key={i} onClick={() => handleCloseNavMenu(page.path)}>
                            <ListItemText primary={page.title}/>
                        </ListItem>
                    ))}
                    </List>
                </Drawer>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page,i) => (
                  <Button
                      key={i}
                      onClick={() => handleCloseNavMenu(page.path)}
                      sx={{ my: 2, color: active === page.path ? '#445e77':'#000', display: 'block',textTransform: "none" }}
                  >
                    {page.title}
                  </Button>
              ))}
            </Box>
              {status === 'client' ? <Button onClick={changePage}
                       variant="outlined">Профиль исполнителя</Button> :
                  <Button color='success' onClick={changePage}
                          variant="contained">Профиль заказчика</Button>}
              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton>
                    <UserSvg/>
                  </IconButton>
                  <IconButton
                      onClick={handleOpenUserMenu}
                      style={anchorElUser ? {transform: "rotate(0deg)"} : {transform: "rotate(180deg)"}}
                  >
                      <ExpandLessIcon/>
                  </IconButton>
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
                      <Stack
                          direction={{ xs: 'column', sm: 'column' }}
                          // spacing={{ xs: 1, sm: 2, md: 4 }}
                      >
                          <Typography  sx={{color:"#000",ml:2}}>{user?.user_name}</Typography>
                          <IconButton>
                              <MessageSvg/>
                          </IconButton>
                          <IconButton>
                              <NotificationSvg/>
                          </IconButton>
                      </Stack>
                  </Menu>
              </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' },alignItems:"center" }}>
              <IconButton onClick={() => navigate('chat')}>
                <MessageSvg/>
              </IconButton>

              <IconButton onClick={() => navigate('notification')}>
                <NotificationSvg/>
              </IconButton>

                <IconButton>
                    {profile?.img_path ?<Avatar src={`${process.env.REACT_APP_IMG_API}${profile?.img_path}`}/>
                        :<UserSvg/>}

                </IconButton>
                <Typography  sx={{color:"#000",ml:2}}>{user?.user_name}</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
  );
};
