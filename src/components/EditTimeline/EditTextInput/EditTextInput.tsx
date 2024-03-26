import { TimelineInfo } from '@pages/Timeline/EditTimelineEntry/EditTimelineEntry';
import React, { useEffect, useState } from 'react';
import styles from './EditTextInput.module.css';
import axios from 'axios';
import { useAppDispatch } from '@redux/hooks';
import { appActions } from '@redux/slices/AppRedux';
import { FormControl, MenuItem, InputLabel, OutlinedInput } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Member } from "@pages/Project/types";

type Props = {
  timeline: TimelineInfo,
  setTimeline: React.Dispatch<React.SetStateAction<TimelineInfo>>,
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "10vw"
    },
  },
};

const baseURL = process.env.REACT_APP_API_URL;

const EditTextInput = ({timeline, setTimeline}: Props) => {
  const [contributors, setContributors] = React.useState<string[]>([]);
  const [isValid, setIsValid] = useState({author: true, title: true});
  const [members, setMembers] = useState<Member[]>([]);
  const dispatch = useAppDispatch();

  async function fetchData() {
    try { await axios({
      method: "get",
      url: `${baseURL}/api/members`,
    })
    .then((response) => {
      setMembers([...response.data.data]);
    })
    .catch(err => {
      dispatch(appActions.setAlert(err.message)); 
    })
    } catch (err) {
      console.log("error");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const checkValidity = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (value === "") {
      setIsValid(prev => ({...prev, [name]: false}));
    }
  }

  const handleChangeAuthor = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setTimeline(prev => ({...prev, author: value}));
  }

  const handleChangeContributors = (event: SelectChangeEvent<typeof contributors>) => {
    const { value } = event.target;
    const currentContributor = typeof value === 'string' ? value.split(',') : value;
    setTimeline(prev => ({...prev, contributors: currentContributor.join(', ')}));
    setContributors(currentContributor);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setIsValid(prev => ({...prev, [name]: true}));
    setTimeline(prev => ({...prev, [name]: value}));
  }

  return (
    <div className={styles.textInputs}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Author</InputLabel>
        <Select
          value={timeline.author}
          label="Author"
          onChange={handleChangeAuthor}
          MenuProps={MenuProps}
        >
          {members.map((member, i) => (
            <MenuItem key={i} value={member._id}>
              {member.name.firstname + " " + member.name.lastname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={styles.textInputGroup}>
        <input type="text" name="title" value={timeline.title} placeholder="Title" 
        className={isValid.title ? styles.textInput : `${styles.textInput} ${styles.textInputInvalid}`}
        onChange={handleChange} onBlur={checkValidity} />
        <p className={styles.hintText}>e.g. Documentation Website Update</p>
      </div>
      <FormControl fullWidth>
        <InputLabel>Contributors</InputLabel>
      <Select
          maxRows={5}
          multiple
          value={contributors}
          onChange={handleChangeContributors}
          input={<OutlinedInput label="Contributors" />}
          MenuProps={MenuProps}
        >
          {members.map((member, i) => (
            <MenuItem key={i} value={member._id}>
              {member.name.firstname + " " + member.name.lastname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default EditTextInput