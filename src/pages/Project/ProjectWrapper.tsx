import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import ToggleButton from '@mui/material/ToggleButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ROUTES from '@statics/routes';
import {
    ProjectDefault,
    ProjectJoin,
    ProjectResources,
    ProjectTeam,
    ProjectContact
} from './'
import { Project } from '@entities/Project'
import PROJECT_NAV from '@statics/projectNav'
import ProjectNavbar from '@components/ProjectNavbar'
import "./ProjectWrapper.css"

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const ProjectWrapper: React.FC<ProjectProps> = ({ match }) => {
    const [selected, setSelected] = React.useState(true);
    const expand = selected ? 'expand' : '';

    // const projects = useAppSelector(selectProjects);

    const projects = [{ // dummy projects
        name: "Correlation"
    },
    {
        name: "NOVA"
    }, {
        name: "NCIS"
    }, {
        name: "SHIVA"
    }, {
        name: "Ideo"
    }, {
        name: "Dormant"
    },
    {
        name: "Image Transitions"
    }]

    const curr_project: any = projects.find(project => project.name === match.params.project_id)

    if (!curr_project) {
        return <div>Selected project does not exist</div>
    }

    let links: { title: string, ref: string }[] = PROJECT_NAV.map(project_nav => {
        return {
            title: project_nav.TITLE,
            ref: ROUTES.PROJECT.BASE + "/" + curr_project.name + project_nav.REF
        }
    })

    return (
        <div className={"project-page"}>
            <ProjectNavbar links={links} currProject={curr_project} match={match} />
        </div>
    )
}

export default ProjectWrapper
