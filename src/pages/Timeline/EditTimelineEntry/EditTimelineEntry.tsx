import CategorySelect from '@components/EditTimeline/CategorySelect/CategorySelect';
import EditDateSelect from '@components/EditTimeline/DateSelect/EditDateSelect';
import ProjectSelect from '@components/EditTimeline/ProjectSelect/ProjectSelect';
import React from 'react';
import styles from './EditTimelineEntry.module.css';

const EditTimelineEntry = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
      <div className={styles.headers}>
        <h1>Edit Timeline Entry</h1>
        <h2>Edit the blanks below to edit the timeline entry</h2>
      </div>
      <main>
        <div className={styles.gridContainer}>
          <div className={styles.basicInfo}>
            <div className={styles.textInputs}>
              <div className={styles.textInputGroup}>
                <input type="text" placeholder="Author" />
                <p className={styles.hintText}>e.g. John Doe</p>
              </div>
              <div className={styles.textInputGroup}>
                <input type="text" placeholder="Title" />
                <p className={styles.hintText}>e.g. Documentation Website Update</p>
              </div>
              <div className={styles.textInputGroup}>
                <input type="text" placeholder="Contributors" />
                <p className={styles.hintText}>e.g. James Doe, Janet Doe</p>
              </div>
            </div>
            <EditDateSelect />
            <ProjectSelect />
            <CategorySelect />
          </div>
          <div className={styles.descriptionGroup}>
            <label htmlFor="timeline-description">Timeline Entry Description</label>
            <textarea name="description" id="timeline-description"></textarea>
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.saveButton}>Save</button>
        </div>
      </main>
      </div>
    </div>
  )
}

export default EditTimelineEntry