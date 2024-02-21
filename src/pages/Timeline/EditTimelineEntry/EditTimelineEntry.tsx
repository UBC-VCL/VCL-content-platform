import CategorySelect from '@components/EditTimeline/CategorySelect/CategorySelect';
import EditDateSelect from '@components/EditTimeline/DateSelect/EditDateSelect';
import EditTextInput from '@components/EditTimeline/EditTextInput/EditTextInput';
import ProjectSelect from '@components/EditTimeline/ProjectSelect/ProjectSelect';
import { useAppSelector } from '@redux/hooks';
import { selectAuth } from '@redux/slices/AuthRedux';
import useAxios from '@services/hooks/useAxios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './EditTimelineEntry.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

export interface EditTimelineProps {
  open: boolean;
  onClose: () => void;
}

const EditTimelineEntry = ({open,onClose}: EditTimelineProps) => {
  const { access_token } = useAppSelector(selectAuth);

  const [timeline, setTimeline] = useState<TimelineInfo>({title: "", description: "", date: "", project: "", author: "", categories: [], contributors: ""});

  const history = useHistory();

  let { timeline_id } = useParams<TimelineParams>();

  const { response } = useAxios({
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
      history.push("/timeline");
      handleClose();
      //TODO: success message
      return;
    }
    //TODO: handle error
  }

  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    >
    <DialogTitle>
     <h1 className={styles.header}>Edit Timeline Entry</h1>
    </DialogTitle>
    <DialogContent>
      <DialogContentText>  
      <h2 className={styles.subHeader}>Edit the blanks below to edit the timeline entry</h2>
      </DialogContentText>
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
          <button className={styles.cancelButton} 
                  onClick={() => {
                    history.push("/timeline");
                    handleClose();
                  }}>
                    Cancel
          </button>
          <button className={styles.saveButton} disabled={!timeline.author || !timeline.title} onClick={save}>Save</button>
        </div>
      </main>
    </DialogContent>
  </Dialog> 
  )
}

export default EditTimelineEntry