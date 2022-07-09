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
ProjectContact } from './'
import { Project } from '@entities/Project'
import PROJECT_NAV from '@statics/projectNav'
import ProjectNavbar from '@components/ProjectNavbar'
import "./ProjectWrapper.css"
import Sidebar from "@components/Sidebar/Sidebar";



interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const ProjectWrapper: React.FC<ProjectProps> = ({match}) => {
    const [ selected, setSelected ] = React.useState(true);
    const expand = selected? 'expand' : '';

    // const projects = useAppSelector(selectProjects);
    const projects = [{
        name: "Correlation"
    },
        {
            name: "Nova"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "IDEO"
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        }]

    const curr_project:any = projects.find(project => project.name === match.params.project_id)

    if (!curr_project) {
        return <div>Selected project does not exist</div>
    }

    let links: {title: string, ref: string}[] = PROJECT_NAV.map(project_nav => {
        return {
            title : project_nav.TITLE,
            ref : ROUTES.PROJECT.BASE + "/" + curr_project.name + project_nav.REF
            }
    })


    return (
        <div className={"project-page"}>
                {/*<ProjectNavbar/>*/}
            <Sidebar links ={links} currProject={curr_project} match = {match}></Sidebar>
            {/*<div className={["sidebar", expand].join(' ')}>*/}
            {/*    <ProjectNavbar isOpen={selected} links={links}/>*/}
            {/*</div>*/}
            {/*<div className="togglebutton">*/}
            {/*    <ToggleButton*/}
            {/*        className="togglebutton"*/}
            {/*        value="check"*/}
            {/*        selected={selected}*/}
            {/*        onChange={() => {*/}
            {/*            setSelected(!selected);*/}
            {/*        }}*/}
            {/*    >*/}
            {/*    {selected? <ChevronLeftIcon /> : <ChevronRightIcon />}*/}
            {/*    </ToggleButton>*/}
            {/*</div>*/}
        {/*    <div className={"content-container"}>*/}
        {/*        <Switch>*/}
        {/*            <Route exact path={match.url} render={() => <ProjectDefault project={curr_project}/>}/>*/}
        {/*            <Route exact path={`${match.url}/join`} render={() => <ProjectJoin project={curr_project}/>}/>*/}
        {/*            <Route exact path={`${match.url}/resources`} render={() => <ProjectResources project={curr_project}/>}/>*/}
        {/*            <Route exact path={`${match.url}/team`} render={() => <ProjectTeam project={curr_project}/>}/>*/}
        {/*            <Route exact path={`${match.url}/contact`} render={() => <ProjectContact project={curr_project}/>}/>*/}
        {/*        </Switch>*/}
        {/*    </div>*/}
        </div>
    )
}

export default ProjectWrapper
