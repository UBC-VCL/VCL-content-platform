import * as React from 'react';
import './ProjectNavbar.css';
import {styled, useTheme} from '@mui/material/styles';
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
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import {ProjectDefault, ProjectJoin, ProjectResources, ProjectTeam} from "@pages/Project";
import FirstPageTwoToneIcon from '@mui/icons-material/FirstPageTwoTone';
import {Button} from "@mui/material";
import {ROUTES} from "@statics";
import Nova from '@pages/Project/Nova/nova';
import Correlation from '@pages/Project/Correlation/correlation';
import ImageTransitions from '@pages/Project/ImageTransitions/imageTransitions';
import Ideo from '@pages/Project/Ideo/ideo';
import { width } from '@mui/system';

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
            <div className='menu-icon'>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{...(open && {display: 'none'})}}
                >
                    <MenuIcon sx={{width: "58px", height: "38px"}}/>
                </IconButton>
            </div>

            <Drawer
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
                        <Typography variant='h5' padding='15px' color = '#1C426D' fontWeight='bold'>
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
                            window.location.pathname=ROUTES.PROJECT.BASE
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
                        <Route exact path={`${ROUTES.PROJECT.BASE}/NOVA`} render={() => <Nova project={props.currProject}/>}/>
                        <Route exact path={`${ROUTES.PROJECT.BASE}/IDEO`} render={() => <Ideo project={props.currProject}/>}/>
                        <Route exact path={`${ROUTES.PROJECT.BASE}/Correlation`} render={() => <Correlation project={props.currProject}/>}/>
                        <Route exact path={`${ROUTES.PROJECT.BASE}/Image Transitions`} render={() => <ImageTransitions project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}`} render={() => <ProjectDefault project={props.currProject}/>}/> 
                        <Route exact path={`${props.match.url}/join`} render={() => <ProjectJoin project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}/resources`} render={() => <ProjectResources project={props.currProject}/>}/>
                        <Route exact path={`${props.match.url}/team`} render={() => <ProjectTeam project={props.currProject}/>}/>
                    </Switch>
                </div>
            </Main>
        </Box>
    );
}