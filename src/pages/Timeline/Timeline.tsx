import React from "react";
import './Timeline.css';
import { SearchFilter } from "./types";
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from "./TimelineFilter";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import { TEXT } from '@statics';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useAppSelector } from '@redux/hooks';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';
import { selectAuth } from '@redux/slices/AuthRedux';
import ConfirmationDailog from '@components/ConfirmationWindow';
import Alert from '@mui/material/Alert';
import { SnapshotOBJ } from "./types";

interface TimelineProps { }

/** 
* Paste one or more documents here
*/
const Timeline: React.FC<TimelineProps> = (props) => {
  const { access_token } = useAppSelector(selectAuth);
  

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  // An array of all timineline history that will be set by retrieveCommitOBJs()
  //  If there are any errors in the retrieveCommitOBJs() than an empty array will be set as the display
  const [commitsArray, setCommitArray] = useState<SnapshotOBJ[]>([]);

  // If the reuqest for the list of timelines is successful then success = true,
  //  else success = false with "success" defaulted to true
  const [success, setSuccess] = useState<boolean>(true)


  // This state variable indicate whether the pop up dialog window opens or not when a timeline(snapshot) is deleted
  // If user click the delete icon on the top right of each timeline box, then openDialog = true,
  // If user close the pop up window, then openDialog = false.
  // It is set to false by default
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  // This state variable tracks which timeline item the user is about to delete by that timeline item's id
  // Once user click the delete icon on the top right of each timeline box, then idToDelete = the id of timeline user is deleting
  const [idToDelete, setIdToDelete] = useState<string>("");

  // handle the close and open of dialog opened when delete the delete icon on the top right of each timeline box is clicked
  const handleClose = () => {
    setOpenDialog(false);
  }
  const handleClickOpen = () => {
    setOpenDialog(true);
  }

  const deleteCommit = async (_id: string) => {
    return axios.delete(`http://localhost:4000/api/snapshots/${_id}`, {
      headers: {
        authorization: access_token
      }
    })
      .then((response) => {
        if (response.status != 200) {
          throw new Error("did not delete it successfully");
        }
        let i = commitsArray.findIndex((snapshot: SnapshotOBJ) => { return snapshot._id == _id });
        const tempArray = commitsArray.slice();
        tempArray.splice(i, 1);
        setCommitArray(tempArray);
        return Promise.resolve(true);
      }).catch((err) => {
        return Promise.reject();
      })
  };

  const [filterBy, setFilter] = useState<SearchFilter >({
    project: ['Correlation', 'NOVA', 'SHIVA', 'Ideo', 'Project', 'NCIS'],
    category: ['Website', 'Meeting', 'Workshop'],
    date: [['initial', ""], ['target', ""]],
    author: ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'],
    keyword: ""
  });

  // creates a http request
  const objCommitHTTPS = async () => {
    /* 
      Structure of a snapshot object from the retrieved list
      { author: "..." {string}
      categories: ['...'] {string[]}
      contributors: ['...'] {string[]}
      date: "..." {date}
      descriptions: ['...'] {string[]}
      hyperlinks: ['...'] {string[]}
      project: "..." {string}
      title: "..." {string}
      } 
    */
    await axios.get("http://localhost:4000/api/snapshots")
      .then(response => {

        // list for the commitsArray useState
        var commitList = response.data.data.map((item: SnapshotOBJ) => ({
          _id: item._id,
          author: item.author,
          categories: item.categories,
          title: item.title,
          project: item.project,
          date: item.date,
          descriptions: item.descriptions,
          hyperlinks: item.hyperlinks,
          contributors: item.contributors,
          updatedTime: item.updatedTime
        }));
        setCommitArray([...commitList])
      }).catch(err => {
        setSuccess(false)
      });
  }

  // will return a boolean whether or not the difference betweent the two dates is less or equal to the "target" provided
  const dateCalc = (target: number, currentDate: Date, targetDate: Date) => {
    return (Math.abs(Math.ceil((currentDate.getTime() - targetDate.getTime()) / (1000 * 3600 * 24))) <= target)
  }

  // filters through an array and filters corresponding to an object structuring what to filter the list for
  //  The filter object may have properties of an empty string meaning that it should not be filter for
  const filterList = (list: SnapshotOBJ[], filterOBJ: SearchFilter) => {
    let listFilter: SnapshotOBJ[] = list;

    const { keyword, date, ...restFilters } = filterOBJ;

    if (keyword && keyword !== "") {
      const lowercaseKeyword = keyword.toLowerCase();
      listFilter = listFilter.filter((item: SnapshotOBJ) =>
        Object.values(item).some(value =>
          Array.isArray(value)
            ? value.some(element => element.toLowerCase().includes(lowercaseKeyword))
            : typeof value === 'string' && value.toLowerCase().includes(lowercaseKeyword)
        )
      );
    }

    if (date[0][1] != '') {
      const initialDate = new Date(date[0][1])

      // console.log(date[0][1])
      
      listFilter = listFilter.filter((item:SnapshotOBJ) => {
        const itemDate = new Date(item.date)
        return itemDate >= initialDate
      })
    }

    if (date[1][1] != '') {
      const targetDate = new Date(date[1][1])
      
      listFilter = listFilter.filter((item:SnapshotOBJ) => {
        const itemDate = new Date(item.date)
        return itemDate <= targetDate
      })
    }

    Object.entries(restFilters).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        if (key === "project") {
          listFilter = listFilter.filter(item => value.includes(item.project));
        }
        if (key === "category") {
          listFilter = listFilter.filter(item =>
            item.categories.some(element => value.includes(element))
          );
        }
        if (key === "author") {
          listFilter = listFilter.filter(item => value.includes(item.author));
        }
      } 
      // else {
      //   if (key === 'date') {
      //     const currentDate = new Date();
      //     if (value === "Last day")
      //       listFilter = listFilter.filter(item => dateCalc(1, currentDate, new Date(item.date)));
      //     if (value === "Last month")
      //       listFilter = listFilter.filter(item => dateCalc(31, currentDate, new Date(item.date)));
      //     if (value === "Last year")
      //       listFilter = listFilter.filter(item => dateCalc(365, currentDate, new Date(item.date)));
      //   }
      // }
    });

    return (
      <ul>
        {listFilter.map((commit: SnapshotOBJ, i) => (
          <li key={i}>
            <span className={"timeline-container-span-" + prjs[i]}></span>
            <TimelineCommitBlock
              author={commit.author}
              title={commit.title}
              project={commit.project}
              date={commit.date}
              descriptions={commit.descriptions}
              contributors={commit.contributors}
              hyperlinks={commit.hyperlinks}
              updatedTime={commit.updatedTime}
              categories={commit.categories}
              isLoggedIn={isLoggedIn}
              onClickDelete={() => {
                setIdToDelete(commit._id);
                handleClickOpen();
              }}
            />
          </li>
        ))}
      </ul>
    );
  }


  // The functions within the useEffect will only be called when the user mounts on to the page
  // so once at the very start of the user entering the Timeline page
  useEffect(() => {
    objCommitHTTPS()
  }, [])


  let prjs: any[] = []

  // hardcode className to display corresponding colors
  commitsArray.forEach((commit: SnapshotOBJ) => {
    let prj = 'others';
    switch (commit.project.toLowerCase()) {
      case 'correlation':
        prj = 'correlation'
        break;
      case 'nova':
        prj = 'nova'
        break;
      case 'ideo':
        prj = 'ideo';
        break;
      default:
        break;
    }
    prjs.push(prj);
  })

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h1>
          {TEXT.TIMELINE_PAGE.TITLE}
        </h1>
      </div>
      <div className='timeline-sub-header'>
        <p>{TEXT.TIMELINE_PAGE.SUBHEADER}</p>
      </div>
      <TimelineSearchbar setFilter={setFilter} filterBy={filterBy} />
      <TimelineFilter setFilter={setFilter} filterBy={filterBy} />
      <div className="timeline-main-body">
        <div className="timeline-container">
          {
            success ?
              filterList(commitsArray, filterBy) : <p className="errorString">{TEXT.TIMELINE_PAGE.ERROR_MESSAGE}</p>
          }
        </div>
      </div>
      <ConfirmationDailog open={openDialog} onClose={handleClose} deleteSnapshot={() => { return deleteCommit(idToDelete) }} />
    </div>
  );
};

export default Timeline;
