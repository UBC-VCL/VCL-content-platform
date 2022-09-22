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
};

export default ProjectNavbar;
