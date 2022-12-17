import React from 'react';
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
        <Breadcrumbs separator=">" style={{marginLeft: '-10px'}}>
            <Link href={ROUTES.PROJECT.BASE} underline="none"> All Projects </Link>
            <Link href={ROUTES.PROJECT.BASE + '/' + props.project_name} underline="none"> {props.project_name} </Link>
            <Typography> {props.page_name} </Typography>
        </Breadcrumbs>
    )    
}

export default ProjectBreadcrumbs;
