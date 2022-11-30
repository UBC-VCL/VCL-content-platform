import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import React from 'react'
import styles from '../Select.module.css';

const ProjectSelect = () => {
  const projects = useAppSelector(selectProjects); 
  const [selectedProject, setSelectedProject] = React.useState<string>("");
  return (
    <div>
        <label className={styles.label}>Project</label>
        <div className={styles.optionsContainer}>
            {projects && projects.length > 0 && (
                projects.map((project) => {
                    return (
                        <span className={styles.item} key={project._id}>
                            <input type="radio" 
                            id={project._id} 
                            name="project"
                            checked={project.name === selectedProject}
                            onChange={() => setSelectedProject(project.name)} />
                            <label className={`${styles.itemButton} ${project.name === selectedProject ? styles.activeButton : styles.inactiveButton}`}
                            tabIndex={0}
                            htmlFor={project._id}>{project.name}</label>
                        </span>
                    )
                })     
            )}
        </div>
    </div>
  )
}

export default ProjectSelect