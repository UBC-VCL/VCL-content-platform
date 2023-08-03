import * as React from 'react';
import './ProjectNavbar.css';
import { styled, useTheme } from '@mui/material/styles';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {  Link  } from "react-router-dom";
import {  Route, Switch  } from "react-router";
import {  ProjectDefault, ProjectJoin, ProjectResources, ProjectTeam, ProjectTimeline , ProjectTimeline } from "@pages/Project";
import FirstPageTwoToneIcon from '@mui/icons-material/FirstPageTwoTone';
import { Button } from "@mui/material";
import { ROUTES } from "@statics";
import { width } from '@mui/system';
import Subpage1 from '@pages/Project/Subpage1';
import Subpage2 from '@pages/Project/Subpage2';
import Subpage1 from '@pages/Project/Subpage1';
import Subpage2 from '@pages/Project/Subpage2';

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
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


const DrawerHeader = styled('div')(({  theme  }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    zIndex: '5',
}));

export default function Sidebar(props: any) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <Box sx={{  display: 'flex'  }}>
            <CssBaseline  />
            <div className='menu-icon'>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ ...(open && { display: 'none' }) }}
                    sx={{ ...(open && { display: 'none' }) }}
                >

                    <MenuIcon sx={{ width: "58px", height: "38px" }} />
                </IconButton>
            </div>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        position: 'static',
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderColor: 'white',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className='DrawerHeader'>

                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} style={{marginTop:"25%", zIndex: "2"}}>
                        {theme.direction === 'ltr' ? <FirstPageTwoToneIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                </div>
                <List>
                    <Typography variant='subtitle2' marginLeft='20px' color='#AEC7E3' style={{ marginTop: "-10px" }}>
                    <Typography variant='subtitle2' marginLeft='20px' color='#AEC7E3' style={{ marginTop: "-10px" }}>
                        Now Viewing
                    </Typography>
                    <ListItem>
                        <Typography variant='h5' marginTop='15px' marginLeft='6px' marginBottom='10px' color='#1C426D' fontWeight='bold'>
                        <Typography variant='h5' marginTop='15px' marginLeft='6px' marginBottom='10px' color='#1C426D' fontWeight='bold'>
                            {props.currProject.name}
                        </Typography>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 1, marginBottom:  '35px'  }} color='#B2C9EC'  />



                    {props.links.map((link: any, index: any) => (
                        link.title == 'Subpage 1' || link.title == 'Subpage 2' ?
                        props.currProject.name == 'Correlation' ? 
                            <div style={{ marginTop: "-4%", marginBottom: "-2%" }}>
                                <div style={{ marginLeft: "5%" }}>
                                    <ListItem key='link.title'>
                                        <ListItemButton component={Link} to={link.ref}>
                                            <Typography color='#5B7E98' marginLeft='0px'>
                                            {link.title}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </div>
                            </div> :
                            <div/>
                            :
                            <ListItem key={link.title}>
                                <ListItemButton component={Link} to={link.ref}>
                                    <Typography color='#5B7E98' marginLeft='0px'>
                                        {link.title}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        link.title == 'Subpage 1' || link.title == 'Subpage 2' ?
                        props.currProject.name == 'Correlation' ? 
                            <div style={{ marginTop: "-4%", marginBottom: "-2%" }}>
                                <div style={{ marginLeft: "5%" }}>
                                    <ListItem key='link.title'>
                                        <ListItemButton component={Link} to={link.ref}>
                                            <Typography color='#5B7E98' marginLeft='0px'>
                                            {link.title}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </div>
                            </div> :
                            <div/>
                            :
                            <ListItem key={link.title}>
                                <ListItemButton component={Link} to={link.ref}>
                                    <Typography color='#5B7E98' marginLeft='0px'>
                                        {link.title}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                    ))}




                    <Box textAlign='left' marginTop='50px' marginLeft='20px'>
                        <Button onClick={() => {
                            window.location.pathname = ROUTES.PROJECT.BASE
                        }} variant='outlined' style={{ textTransform: 'none' }}>
                            <Typography color='#60779A'>
                            window.location.pathname = ROUTES.PROJECT.BASE
                        }} variant='outlined' style={{ textTransform: 'none' }}>
                            <Typography color='#60779A'>
                                View Other Projects
                            </Typography>
                        </Button>
                    </Box>

                </List>

            </Drawer>

            <Main open={open}>
                <div className={"content-container"}>
                    <Switch>
                        <Route exact path={`${ROUTES.PROJECT.BASE}/NOVA`} render={() => <Nova project={props.currProject} />} />
                        <Route exact path={`${ROUTES.PROJECT.BASE}/IDEO`} render={() => <Ideo project={props.currProject} />} />
                        <Route exact path={`${ROUTES.PROJECT.BASE}/Correlation`} render={() => <Correlation project={props.currProject} />} />
                        <Route exact path={`${ROUTES.PROJECT.BASE}/Image Transitions`} render={() => <ImageTransitions project={props.currProject} />} />
                        <Route exact path={`${props.match.url}`} render={() => <ProjectDefault project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/join`} render={() => <ProjectJoin project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/resources`} render={() => <ProjectResources project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/team`} render={() => <ProjectTeam project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/timeline`} render={() => <ProjectTimeline project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/subpage1`} render={() => <Subpage1 project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/subpage2`} render={() => <Subpage2 project={props.currProject} />} />

                    </Switch>
                </div>
            </Main>
        </Box >
        </Box >
    );
}