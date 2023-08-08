import React from 'react';
import { Project } from '@entities/Project';
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs';
import { TEXT } from '@statics';
import "./Project.css";
import { Timeline } from '@pages/Timeline';
import { SearchFilter, SnapshotOBJ, ProjectOBJ } from "@pages/Timeline/types";
import { useState, useEffect } from 'react';
import axios from 'axios'
interface ProjectProps {
    project: Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {

    // These will be the arrays that will contain dynamically generated list for optinos in the Timeline filter
    const [dynamicProjects, setDProjects] = useState<Array<string>>([]);
    const [dynamicAuthors, setDAuthors] = useState<Array<string>>([]);
    const [dynamicCategories, setDCategories] = useState<Array<string>>([])

    useEffect(() => {
        getProjectCommit();
    }, [])


    // This defines the default filter settings that the Timeline filter will start off on
    const projectTimelineFilter = {
        project: dynamicProjects,
        category: dynamicCategories,
        date: "All",
        author: dynamicAuthors,
        keyword: ""
    };

    //TODO: USE this react state variable  plus the hardcoded projects for the filter list
    // const [projectFilterList, setProjectFilterList] = useState<string[]>([]);
    const getProjectCommit = async () => {
        await axios.get(`http://localhost:4000/api/snapshots`)
            .then((response) => {
                if (response.status != 200) {
                    throw new Error(response.data.message)
                }
                const projects: Array<SnapshotOBJ> = response.data.data;
                // const filteredProjects =
                //   projects
                //     .filter((project) => {
                //       return project.members.length != 0;
                //     })
                //     .map(project => project.name);

                // setProjectFilterList(filteredProjects);

                projects.map((item: SnapshotOBJ, index: number) => {

                    if (!dynamicProjects.includes(item.project))
                        setDProjects((prev) => [...prev, item.project])

                    if (!dynamicAuthors.includes(item.author))
                        setDAuthors((prev) => [...prev, item.author])

                    item.categories.map((item2, index) => {
                        if (!dynamicCategories.includes(item2))
                            setDCategories((prev) => [...prev, item2])
                    })

                })

            }).catch((err) => {
                //do nothing
            });
    };

    projectTimelineFilter.project.push(props.project.name);
    if (props.project.name != "Ideo") {
        return (
            <div className='project-subcontent-container'>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.RESOURCES} />
                resources page for {props.project.name};
            </div>
        )
    } else {
        return (
            <div className='project-subcontent-container'>
                <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.RESOURCES} />
                <div style={{ transform: `scale(0.8)`, transformOrigin: 'top left' }}>
                    <Timeline defaultFilter={projectTimelineFilter} dynamicProjects={dynamicProjects} dynamicAuthors={dynamicAuthors} dynamicCategories={dynamicCategories} />
                </div>
            </div>
        )
    }

};

export default ProjectDefault;