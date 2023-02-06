import { TimelineInfo } from '@/pages/timeline/[id]/edit';
import React from 'react'
import { useProjectStore } from 'stores/ProjectStore';
import styles from '../Select.module.css';

type Props = {
    timeline: TimelineInfo,
    setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>,
}

const ProjectSelect = ({timeline, setTimeline}:Props) => {
  const projects = useProjectStore((state) => state.projects);

  return (
    <div className={styles.selectContainer}>
        <label className={styles.label}>Select a Project</label>
        <div className={styles.optionsContainer}>
            {projects && projects.length > 0 && (
                projects.map((project: any) => {
                    return (
                        <span className={styles.item} key={project._id}>
                            <input type="radio" 
                            className={styles.input}
                            id={project._id} 
                            name="project"
                            checked={project.name === timeline.project}
                            onChange={() => setTimeline(prev => ({...prev, project: project.name} as TimelineInfo))} />
                            <label className={`${styles.itemButton} ${project.name === timeline.project ? styles.activeButton : styles.inactiveButton}`}
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