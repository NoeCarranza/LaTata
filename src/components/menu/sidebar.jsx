import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import './menu.css';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useMediaQuery } from '@mui/material';
import "../menu/menu.css";


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

const ListaItems = [
  { text: 'Quienes somos', path: '/quienes-somos' },
  { text: 'Cómo funciona', path: '/como-funciona' },
  { text: 'Quiero formar parte', path: '/postularse' },
  { text: 'Tarifas', path: '/tarifas' },
  { text: 'App', path: '/aplicacion' }
];

const iconList = [
  <FingerprintIcon />,
  <PhoneAndroidIcon />,
  <Face2Icon />,
  <MonetizationOnIcon />,
  <AppShortcutIcon />
];

function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="menu">
      <AppBar open={open} className='appbar-menu' sx={{color:'black'}}>
        <Toolbar className='menu-toolbar'>
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
          <Link to="/">
          <img src={logo} className='logo'></img>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{width:'40%'}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ display: 'block', padding:'0'}}>
  {ListaItems.map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit'}}>
        <ListItemButton
          sx={{
            minHeight: 100,
            justifyContent: open ? 'initial' : 'center',
            textAlign:'start',
            px: 2.5,
            width:'250px'

          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {iconList[index]}
          </ListItemIcon>
          <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </Link>
    </ListItem>
  ))}
</List>
      </Drawer>
    </div>
  );
}

export default MiniDrawer