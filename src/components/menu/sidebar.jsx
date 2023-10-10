import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Face2Icon from '@mui/icons-material/Face2';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import logo from "../../assets/sonrisa4.png";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './menu.css';
import { Link, Route, Routes } from 'react-router-dom';



const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function MiniDrawer() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const iconList = [
        <FingerprintIcon />,
        <PhoneAndroidIcon />,
        <Face2Icon />,
        <MonetizationOnIcon />,
        <AppShortcutIcon />
    ];

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [loginButtonVisible, setLoginButtonVisible] = React.useState(true);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const guestListItems = [
        { text: 'Quienes somos', path: '/quienes-somos' },
        { text: 'Cómo funciona', path: '/como-funciona' },
        { text: 'Quiero formar parte', path: '/postularse' },
        { text: 'Tarifas', path: '/tarifas' },
        { text: 'App', path: '/aplicacion' }
    ];
    
    const loggedInListItems = [
        { text: 'Dashboard', path: '/dashboard' },
    ];
    

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className='menu'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <Link to="/">
                            <img className='logo' src={logo} alt="logo" />
                        </Link>
                    </div>
                    {loginButtonVisible && (
                        <div>
                            <Link to="/login">
                                <Button sx={{
                                    backgroundColor: 'rgb(232, 125, 145)', fontFamily: 'Roboto', fontWeight: '300', color: 'black', fontWeight: '100px',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        boxShadow: 'none',
                                        border: 'solid'
                                    },
                                }} endIcon={<SendIcon />} onClick={() => setLoginButtonVisible(false)}>
                                    Login
                                </Button>
                            </Link>
                        </div>
                    )}

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <List sx={{display:'flex',flexDirection:'column', alignItems:'flex-start'}}>
    {isLoggedIn ? (
        loggedInListItems.map((item, index) => (
            <Link to={item.path} key={item.text}>
                <ListItemButton disablePadding style={{ display: 'flex', paddingTop:'40px'}} >
                    {iconList[index]}
                    <ListItemText 
                        primary={item.text} 
                        style={{ opacity: open ? 1 : 0, marginLeft: '12px' }} 
                    />
                </ListItemButton>
            </Link>
        ))
    ) : (
        guestListItems.map((item, index) => (
            <Link to={item.path} key={item.text}>
                <ListItemButton disablePadding style={{ display: 'flex', paddingTop:'40px'}} >
                    {iconList[index]}
                    <ListItemText 
                        primary={item.text} 
                        style={{ opacity: open ? 1 : 0, marginLeft: '12px' }} 
                    />
                </ListItemButton>
            </Link>
        ))
    )}
</List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, padding: '0' }}>
                <DrawerHeader />
            </Box>
        </Box>
    );
}

export default MiniDrawer;
