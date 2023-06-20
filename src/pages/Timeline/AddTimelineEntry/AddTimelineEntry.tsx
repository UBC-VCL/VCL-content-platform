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

// type TimelineParams = {
//   timeline_id: string;
// };

interface TimelineProps { }

interface SnapshotOBJ {
  title: string,
  descriptions: Array<string>,
  hyperlinks: Array<string>,
  date: string,
  project: string,
  author: string,
  categories: Array<string>,
  contributors: Array<string> 
}

interface TimelineInfo {
  title: string,
  description: string,
  date: string,
  project: string,
  author: string,
  categories: Array<string>,
  contributors: string,
}

const AddTimelineEntry: React.FC<TimelineProps> = (props) => {
  // let { timeline_id } = useParams<TimelineParams>();
  const { access_token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [timeline, setTimeline] = useState<TimelineInfo>({title: "", description: "", date: "2004-01-01", project: "", author: "", categories: [], contributors: ""});

  const [allTimeline, setAllTimeline] = useState<SnapshotOBJ[]>([]);

  const history = useHistory();
  
  const add = async () => {
    const objCommitHTTPS = async (): Promise<SnapshotOBJ[]> => {
      var returnData: SnapshotOBJ[] = [];
      await axios.get("http://localhost:4000/api/snapshots")
        .then(response => {
          setAllTimeline([...response.data.data, snapshot])
          console.log(allTimeline);
        }).catch(err => {
          
        });
      return returnData
    }

    const splitParagraphs = (description: string) => {
        return description.split('\n');
    }

    const newTimeline = {...timeline, contributors: timeline.contributors.split(",").map((c: string) => c.trim())};
    const snapshot = {
      author: newTimeline.author,
      title: newTimeline.title,
      project: newTimeline.project,
      date: newTimeline.date,
      categories: newTimeline.categories, 
      descriptions: splitParagraphs(timeline.description),
      hyperlinks: ["google.com"],
      contributors: newTimeline.contributors
    }
    console.log(snapshot);
    console.log(access_token);
    await axios({
      method: "POST",
      url: "http://localhost:4000/api/snapshots",
      data: snapshot,
      headers: {
        authorization: access_token
      }
    })
    .then(() => {
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