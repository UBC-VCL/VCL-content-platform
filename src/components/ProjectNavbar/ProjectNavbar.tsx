import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

interface ProjectNavbarParams {
    isOpen: boolean;
    links: { title: string, ref: string }[];
}

const ProjectNavbar: React.FC<ProjectNavbarParams> = (props) => {

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={props.isOpen}
            PaperProps={{ style: { position: 'relative' } }}
        >
            <List>
                {props.links.map((link, index) => (
                    <ListItem button key={index} component={Link} to={link.ref}>
                        <ListItemText primary={link.title}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default ProjectNavbar;

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
//
// type Anchor = 'top' | 'left' | 'bottom' | 'right';
//
// export default function ProjectNavbar() {
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
//             sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>
//                 {['', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
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

