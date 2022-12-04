import React, { useState } from 'react'
import { TimelineInfo } from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import styles from './EditDateSelect.module.css'

type Props = {
  timeline: TimelineInfo,
  setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>,
}

const EditDateSelect = ({timeline, setTimeline}:Props) => {
  
  const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const days = Array.from({ length: 31 }, (v, i) => `${i + 1}`.padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (v, i) => `${i + currentYear - 19}`);
  const selectLists = [ 
    {name: "month", options: months},
    {name: "day", options: days},
    {name: "year", options: years} 
  ];

  const changeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (!timeline?.date) return;
    const dateObject = new Date(timeline.date);
    dateObject[name === "month" ? "setMonth" : name === "day" ? "setDate" : "setFullYear"](parseInt(value));
    setTimeline(prev => ({...prev, date: dateObject.toISOString()} as TimelineInfo));
  }

  return (
    <div>
      <p className={styles.label}>Select a Date</p>
      <div className={styles.dateGroup}>
        {selectLists.map(list => (
          <select key={list.name} name={list.name}
          value={timeline?.date ? new Date(timeline.date)[list.name === "month" ? "getMonth" : list.name === "day" ? "getDate" : "getFullYear"]() : ""}
          onChange={changeDate}>
            {list.options.map((option, i) => (
              <option key={option} value={list.name === "month" ? i : list.name === "day" ? i + 1 : option}>{option}</option>
            ))}
          </select>
        ))}
      </div>
    </div>  
  )
}

export default EditDateSelect