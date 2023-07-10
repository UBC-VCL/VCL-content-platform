import React from 'react';
import './ProjectBreadcrumbs.css';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ROUTES from '@statics/routes'

interface ProjectBreadcrumbsParam {
    project_name: string,
    page_name: string
}

const ProjectBreadcrumbs: React.FC<ProjectBreadcrumbsParam> = (props) => {
    return (
        <Breadcrumbs 
            separator=">" 
            style={{ 
                marginTop: "4%",
                marginBottom: "6%",
                color: "#AEC7EC",
                marginLeft:"-3%"
            }}>
            <Link href={ROUTES.PROJECT.BASE} underline="none" id="project-breadcrumbs">
                 All Projects 
            </Link>
            <Link href={ROUTES.PROJECT.BASE + '/' + props.project_name} underline="none" id="project-breadcrumbs"> 
                {props.project_name} 
            </Link>
            <Typography className="current-page">
                {props.page_name} 
            </Typography>
        </Breadcrumbs>
    )    
}

export default ProjectBreadcrumbs;
