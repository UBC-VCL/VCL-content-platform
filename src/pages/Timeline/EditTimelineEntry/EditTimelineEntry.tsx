import CategorySelect from '@components/EditTimeline/CategorySelect/CategorySelect';
import EditDateSelect from '@components/EditTimeline/DateSelect/EditDateSelect';
import ProjectSelect from '@components/EditTimeline/ProjectSelect/ProjectSelect';
import { useAppSelector } from '@redux/hooks';
import { selectAuth } from '@redux/slices/AuthRedux';
import useAxios from '@services/hooks/useAxios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './EditTimelineEntry.module.css';

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

const EditTimelineEntry = () => {
  const { access_token } = useAppSelector(selectAuth);

  const [timeline, setTimeline] = useState<TimelineInfo>({title: "", description: "", date: "", project: "", author: "", categories: [], contributors: ""});

  const history = useHistory();

  let { timeline_id } = useParams<TimelineParams>();

  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/api/snapshots/${timeline_id}`,
  });

  useEffect(() => {
    if (!response) return;
    const {title, description, date, project, author, categories, contributors} = response.data;
    setTimeline({
      title,
      description,
      date,
      project,
      author: author.username,
      categories,
      contributors: contributors.map((c: { username: string; }) => c.username).join(", "),
    })
  }, [response]);

  console.log({ timeline, contributors: timeline.contributors });

  const save = async () => {
    const updatedTimeline = {...timeline, contributors: timeline.contributors.split(",").map((c: string) => c.trim())};
    const editResponse = await axios({
      method: 'put',
      url: `/api/snapshots/${timeline_id}`,
      data: updatedTimeline,
      headers: {
        authorization: access_token
      }
    });
    if (editResponse.status === 200) {
      console.log("success");
      history.push("/timeline");
      return;
    }
    //TODO: handle error
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
      <div className={styles.headers}>
        <h1 className={styles.header}>Edit Timeline Entry</h1>
        <h2 className={styles.subHeader}>Edit the blanks below to edit the timeline entry</h2>
      </div>
      <main>
        <div className={styles.gridContainer}>
          <div className={styles.basicInfo}>
            <div className={styles.textInputs}>
              <div className={styles.textInputGroup}>
                <input type="text" name="author" value={timeline.author} placeholder="Author"
                onChange={(e) => setTimeline(prev => ({...prev, author: e.target.value} as TimelineInfo))} />
                <p className={styles.hintText}>e.g. John Doe</p>
              </div>
              <div className={styles.textInputGroup}>
                <input type="text" name="title" value={timeline.title} placeholder="Title" 
                onChange={(e) => setTimeline(prev => ({...prev, title: e.target.value} as TimelineInfo))} />
                <p className={styles.hintText}>e.g. Documentation Website Update</p>
              </div>
              <div className={styles.textInputGroup}>
                <input type="text" name="contributors" value={timeline.contributors} placeholder="Contributors" 
                onChange={(e) => setTimeline(prev => ({...prev, contributors: e.target.value} as TimelineInfo))} />
                <p className={styles.hintText}>e.g. James Doe, Janet Doe</p>
              </div>
            </div>
            <EditDateSelect timeline={timeline} setTimeline={setTimeline} />
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
          <button className={styles.saveButton} onClick={save}>Save</button>
        </div>
      </main>
      </div>
    </div>
  )
}

export default EditTimelineEntry