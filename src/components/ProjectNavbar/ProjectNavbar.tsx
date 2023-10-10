import * as React from 'react';
import './ProjectNavbar.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
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
import {  ProjectDefault, ProjectJoin, ProjectResources, ProjectTeam , ProjectPublications } from "@pages/Project";
import FirstPageTwoToneIcon from '@mui/icons-material/FirstPageTwoTone';
import { Button } from "@mui/material";
import { ROUTES } from "@statics";

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
                >

                    <MenuIcon sx={{ width: "58px", height: "38px", color: "white" }} />
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
                        Now Viewing
                    </Typography>
                    <ListItem>
                        <Typography variant='h5' marginTop='15px' marginLeft='6px' marginBottom='10px' color='#1C426D' fontWeight='bold'>
                            {props.currProject.name}
                        </Typography>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 1, marginBottom:  '35px'  }} color='#B2C9EC'  />



                    {props.links.map((link: any, index: any) => (
                        <>
                            {((link.title == "Join Our Team" || link.title == "Timeline") && props.currProject.name == 'NCIS') ? (<></>) : 
                            (
                            <ListItem key={link.title}>
                                <ListItemButton component={Link} to={link.ref}>
                                    <Typography color = '#5B7E98' marginLeft='0px'>
                                        {link.title}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>)}
                            {index == 0 && (
                                <>
                                {props.currProject.subpage?.map((page: any) => (
                                    <ListItem key={page.name} >
                                        <ListItemButton component={Link} to={`${props.match.url}/${page.name}`}>
                                            <Typography color = '#5B7E98' marginLeft='20px'>
                                                {page.name}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                </>
                            )}
                        </>
                    ))}




                    <Box textAlign='left' marginTop='50px' marginLeft='20px'>
                        <Button onClick={() => {
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
                        <Route exact path={`${props.match.url}`} render={() => <ProjectDefault project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/join`} render={() => <ProjectJoin project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/resources`} render={() => <ProjectResources project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/team`} render={() => <ProjectTeam project={props.currProject} />} />
                        <Route exact path={`${props.match.url}/publications`} render={() => <ProjectPublications project={props.currProject} />} />
                        {
                            props.currProject.subpage?.map((page: any) => (
                                <Route exact path={`${props.match.url}/${page.name}`} render={() => <ProjectDefault project={page} />} />
                            ))
                        }

                    </Switch>
                </div>
            </Main>
        </Box>
    );
}