import { TimelineInfo } from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import React from 'react'
import styles from '../Select.module.css';

type Props = {
    timeline: TimelineInfo,
    setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>;
}

const ProjectSelect = ({timeline, setTimeline}:Props) => {
  const projects = useAppSelector(selectProjects); 

  return (
    <div className={styles.selectContainer}>
        <label className={styles.label}>Project</label>
        <div className={styles.optionsContainer}>
            {projects && projects.length > 0 && (
                projects.map((project) => {
                    return (
                        <span className={styles.item} key={project._id}>
                            <input type="radio" 
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