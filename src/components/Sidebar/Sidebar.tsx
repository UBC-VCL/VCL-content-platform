// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import {PropsWithChildren} from "react";
// import {Link} from "react-router-dom";
// import {Typography} from "@mui/material";
//
//
// type Anchor = 'top' | 'left' | 'bottom' | 'right';
//
// const Sidebar = (props: any) => {
//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//     });
//
//     const toggleDrawer =
//         (anchor: Anchor, open: boolean) =>
//             (event: React.KeyboardEvent | React.MouseEvent) => {
//                 if (
//                     event.type === 'keydown' &&
//                     ((event as React.KeyboardEvent).key === 'Tab' ||
//                         (event as React.KeyboardEvent).key === 'Shift')
//                 ) {
//                     return;
//                 }
//
//                 setState({ ...state, [anchor]: open });
//             };
//
//     const list = (anchor: Anchor) => (
//         <Box
//             sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 275 }}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//
//             <List>
//                 <Typography variant= 'subtitle2' marginLeft = '30px'>
//                     Now Viewing
//                 </Typography>
//                 <ListItem>
//                     <Typography variant= 'h5' padding = '15px'>
//                         {props.currProject.name}
//                     </Typography>
//                 </ListItem>
//
//                 {props.links.map((link: any, index: any) => (
//                     <ListItem key={link.title}>
//                         <ListItemButton component={Link} to={link.ref}>
//                             <Typography>
//                                 {link.title}
//                             </Typography>
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );
//
//     return (
//         <div>
//             {(['left'] as const).map((anchor) => (
//                 <React.Fragment key={anchor}>
//                     <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//                     <Drawer
//                         anchor={anchor}
//                         open={state[anchor]}
//                         onClose={toggleDrawer(anchor, false)}
//                     >
//                         {list(anchor)}
//                     </Drawer>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }
//
// export default Sidebar;

import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import {ProjectContact, ProjectDefault, ProjectJoin, ProjectResources, ProjectTeam} from "@pages/Project";
import FirstPageTwoToneIcon from '@mui/icons-material/FirstPageTwoTone';
import {Button} from "@mui/material";
import {ROUTES} from "@statics";

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));




export default function Sidebar(props: any) {


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{mr: 2, ...(open && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>

            <Drawer

                PaperProps={{ style: { height: 'calc(100% - 64px)', top: 64} }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <FirstPageTwoToneIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <Typography variant='subtitle2' marginLeft='30px' color = '#AEC7E3'>
                        Now Viewing
                    </Typography>
                    <ListItem>
                        <Typography variant='h5' padding='15px' color = '#1C426D'>
                            {props.currProject.name}
                        </Typography>
                    </ListItem>
                    <Divider variant ='middle' sx={{ borderBottomWidth: 2 }} color='#B2C9EC'/>

                    {props.links.map((link: any, index: any) => (
                        <ListItem key={link.title}>
                            <ListItemButton component={Link} to={link.ref}>
                                <Typography color = '#5B7E98'>
                                    {link.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>

                    ))}
                    <Box textAlign='center' padding='50px'>
                    <Button onClick={() => {
                        window.location.pathname=ROUTES.PROJECT.OVERVIEW
                    }} variant ='outlined' style={{textTransform: 'none'}}>
                        <Typography color = '#60779A'>
                            View Other Projects
                        </Typography>
                    </Button>
                    </Box>

                </List>

            </Drawer>

            <Main open={open}>
                <div className={"content-container"}>
                    <Switch>
                        <Route exact path={props.match.url} render={() => <ProjectDefault project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}/join`} render={() => <ProjectJoin project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}/resources`} render={() => <ProjectResources project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}/team`} render={() => <ProjectTeam project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}/contact`} render={() => <ProjectContact project={props.currProject}/>}/>
                    </Switch>
                </div>


            </Main>

        </Box>
    );
}
