import { TimelineInfo } from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import React, { useEffect, useState } from 'react'
import styles from './EditTextInput.module.css'

type Props = {
  timeline: TimelineInfo,
  setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>,
}

const EditTextInput = ({timeline, setTimeline}: Props) => {
  const [isValid, setIsValid] = useState({author: true, title: true});
  
  const checkValidity = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const {name, value} = e.target;
    if (value === "") {
      setIsValid(prev => ({...prev, [name]: false}));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setIsValid(prev => ({...prev, [name]: true}));
    setTimeline(prev => ({...prev, [name]: value}));
  }

  return (
    <div className={styles.textInputs}>
      <div className={styles.textInputGroup}>
        <input type="text" name="author" value={timeline.author} placeholder="Author"
        className={isValid.author ? styles.textInput : `${styles.textInput} ${styles.textInputInvalid}`}
        onChange={handleChange} onBlur={checkValidity}/>
        <p className={styles.hintText}>e.g. John Doe</p>
      </div>
      <div className={styles.textInputGroup}>
        <input type="text" name="title" value={timeline.title} placeholder="Title" 
        className={isValid.title ? styles.textInput : `${styles.textInput} ${styles.textInputInvalid}`}
        onChange={handleChange} onBlur={checkValidity} />
        <p className={styles.hintText}>e.g. Documentation Website Update</p>
      </div>
      <div className={styles.textInputGroup}>
        <input type="text" name="contributors" value={timeline.contributors} placeholder="Contributors" 
        className={styles.textInput} onChange={handleChange} />
        <p className={styles.hintText}>e.g. James Doe, Janet Doe</p>
      </div>
    </div>
  )
}

export default EditTextInput