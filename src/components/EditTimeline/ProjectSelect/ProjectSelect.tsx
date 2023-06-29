import { TimelineInfo } from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import React from 'react'
import styles from '../Select.module.css';

type Props = {
    timeline: TimelineInfo,
    setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>,
}

const ProjectSelect = ({timeline, setTimeline}:Props) => {
  const projects = useAppSelector(selectProjects); 
  let id = 0;
  return (
    <div className={styles.selectContainer}>
        <label className={styles.label}>Select a Project</label>
        <div className={styles.optionsContainer}>
            {projects && projects.length > 0 && (
                projects.map((project) => {
                    id++;
                    return (
                        <label className={`${styles.itemButton} ${project.name === timeline.project ? styles.activeButton : styles.inactiveButton}`}
                        key={project.name}
                        onClick={() => setTimeline(prev => ({...prev, project: project.name} as TimelineInfo))}
                            tabIndex={0}
                            htmlFor={project.key}>{project.name}
                        </label>
                    )
                })     
            )}
        </div>
    </div>
  )
}

export default ProjectSelect