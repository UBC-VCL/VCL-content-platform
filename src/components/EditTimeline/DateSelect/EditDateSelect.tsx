import React from 'react'
import styles from './EditDateSelect.module.css'

const EditDateSelect = () => {
  const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const days = Array.from({ length: 31 }, (v, i) => `${i + 1}`.padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (v, i) => `${i + currentYear - 19}`);
  const selectLists = [ 
    {name: "month", options: months},
    {name: "day", options: days},
    {name: "year", options: years} 
  ];
  return (
    <div>
      <p className={styles.label}>Select a Date</p>
      <div className={styles.dateGroup}>
        {selectLists.map(list => (
          <select key={list.name} name={list.name}>
            {list.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ))}
      </div>
    </div>
    
  )
}

export default EditDateSelect