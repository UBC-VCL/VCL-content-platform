import CategorySelect from '@components/EditTimeline/CategorySelect/CategorySelect';
import EditDateSelect from '@components/EditTimeline/DateSelect/EditDateSelect';
import EditTextInput from '@components/EditTimeline/EditTextInput/EditTextInput';
import ProjectSelect from '@components/EditTimeline/ProjectSelect/ProjectSelect';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { selectAuth } from '@redux/slices/AuthRedux';
import useAxios from '@services/hooks/useAxios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './AddTimelineEntry.module.css';
import { appActions } from '@redux/slices/AppRedux';

type TimelineParams = {
  timeline_id: string;
};

export type TimelineInfo = {
  title: string,
  description: string,
  date: string,
  project: string,
  author: string,
  categories: Array<string>,
  contributors: string,
}

const AddTimelineEntry = () => {
  const { access_token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [timeline, setTimeline] = useState<TimelineInfo>({title: "", description: "", date: "", project: "", author: "", categories: [], contributors: ""});

  const [allTimeline, setAllTimeline] = useState([]);

  const history = useHistory();
  const fetchTimeline = async () => {
    try {
      await axios.get("https://localhost:4000/api/snapshots")
      .then(response => {
        setAllTimeline([...response.data.data])
      })
    } catch(err){

    }
}
  
  const add = async () => {
    fetchTimeline();
    const newTimeline = {...timeline, contributors: timeline.contributors.split(",").map((c: string) => c.trim())};
    const newAllTimeline = [...allTimeline, newTimeline];
    await axios({
      method: 'POST',
      url: `https://localhost:4000/api/snapshots`,
      data: newTimeline,
      headers: {
        authorization: access_token
      }
    }).then(() => {
        history.push("/timeline");
        dispatch(appActions.setAlert("Add Entry Successful!"));
    }).catch(err => {
        // console.log(err.message);
        // dispatch(appActions.setAlert("Add Entry Failed!"));
        dispatch(appActions.setAlert(err.message));
    })
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
      <div className={styles.headers}>
        <h1 className={styles.header}>Add Timeline Entry</h1>
        <h2 className={styles.subHeader}>Edit the blanks below to add the timeline entry</h2>
      </div>
      <main>
        <div className={styles.gridContainer}>
          <div className={styles.basicInfo}>
            <EditTextInput timeline={timeline} setTimeline={setTimeline}/>
            <EditDateSelect timeline={timeline} setTimeline={setTimeline}/>
            <ProjectSelect timeline={timeline} setTimeline={setTimeline}/>
            <CategorySelect timeline={timeline} setTimeline={setTimeline}/>
          </div>
          <div className={styles.descriptionGroup}>
            <label className={styles.descriptionLabel} htmlFor="timeline-description">Timeline Entry Description</label>
            <textarea name="description" id="timeline-description" value={timeline.description}
            onChange={(e) => setTimeline(prev => ({...prev, description: e.target.value} as TimelineInfo))}></textarea>
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.cancelButton} onClick={() => history.push("/timeline")}>Cancel</button>
          <button className={styles.saveButton} disabled={!timeline.author || !timeline.title} onClick={add}>Add</button>
        </div>
      </main>
      </div>
    </div>
  )
}

export default AddTimelineEntry