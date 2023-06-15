import React from "react";
import './Timeline.css';
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from "./TimelineFilter";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import { TEXT } from '@statics';
import id from "date-fns/esm/locale/id/index";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAppSelector } from '@redux/hooks';
import { selectAuth } from '@redux/slices/AuthRedux';
interface TimelineProps { }
import ConfirmationDailog from "@components/ConfirmationWindow/confirmationWindow";

/** 
* Paste one or more documents here
*/


const Timeline: React.FC<TimelineProps> = (props) => {
  const { access_token } = useAppSelector(selectAuth);
  // the response from the server will be a list of objects, and the structure of a single obj is CommitOBJ
  interface SnapshotOBJ {
    _id: string;
    author: string;
    elementChanged: string;
    project: string;
    date: Date;
    descriptions: Array<string>;
    hyperlinks: Array<string>;
    contributors: Array<string>;
    updatedTime: string;
    categories: Array<string>;
  }
  // An array of all timineline history that will be set by retrieveCommitOBJs()
  //  If there are any errors in the retrieveCommitOBJs() than an empty array will be set as the display
  const [commitsArray, setCommitArray] = useState<SnapshotOBJ[]>([]);

  // If the reuqest for the list of timelines is successful than success = true,
  //  else success = false with "success" defaulted to true
  const [success, setSuccess] = useState<boolean>(true)

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<string>("");
  const handleClose =  ()=> {
    setOpenDialog(false);
  }
  const handleClickOpen = ()=>{
    setOpenDialog(true);
  }



  // creates a http request
  const objCommitHTTPS = async (): Promise<SnapshotOBJ[]> => {
    
    var returnData: SnapshotOBJ[] = []

    /* 
      Structure of a snapshot object from the retrieved list

      { author: "..." {string}
      categories: (5) ['...', '...', '...', '...', '...'] {string[]}
      contributors: ['...'] {string[]}
      date: "..." {date}
      description: "..." {string}
      imageURL: "..." {string}
      project: "..." {string}
      title: "..." {string}
      _id:  "..." {string}
      } 
    */
    await axios.get("http://localhost:4000/api/snapshots")
      .then(response => {
        setCommitArray([...response.data.data])
      }).catch(err => {
        setSuccess(false)
      });
    return returnData
  }

  // Make https request inorder to retrieve information from the backend
  //  regarding to the timeline that needs to be displayed
  const retrieveCommitOBjs = () => {
    objCommitHTTPS()
  }

  // The functions within the useEffect will only be called when the user mounts on to the page
  // so once at the very start of the user entering the Timeline page
  useEffect(() => {
    retrieveCommitOBjs()
  }, [])

  const deleteCommit = async (_id: string) => {
    //const { access_token } = useAppSelector(selectAuth);
   
   return axios.delete(`http://localhost:4000/api/snapshots/${_id}`,  { 
      headers: {
        authorization: access_token
      } 
    })
      .then((response)=> {
        if(response.status != 200) {
          throw new Error("did not delete it successfully");
        }
        let i = commitsArray.findIndex((snapshot: SnapshotOBJ)=> {return snapshot._id == _id});
        const tempArray = commitsArray.slice();
        tempArray.splice(i, 1);
        setCommitArray(tempArray);
        return Promise.resolve(true);
      }).catch((err)=>{
        return Promise.reject();
      })
  };

  let prjs: any[] = []

  // hardcode className to display corresponding colors
  commitsArray.forEach(commit => {
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
      <TimelineSearchbar />
      <TimelineFilter />
      <div className="timeline-main-body">
        <div className="timeline-container">
          {
            success ?
              <ul>
                {commitsArray.map((commit: SnapshotOBJ, i) => {
                  console.log(commit);
                  return (
                    <li key={commit._id}>
                      <span className={"timeline-container-span-" + prjs[i]}></span>
                      <TimelineCommitBlock
                        author={commit.author}
                        elementChanged={commit.elementChanged}
                        project={commit.project}
                        date={commit.date}
                        descriptions={commit.descriptions}
                        contributors={commit.contributors}
                        hyperlinks={commit.hyperlinks}
                        updatedTime={commit.updatedTime}
                        categories={commit.categories}
                        onClickDelete = {()=>{
                          setIdToDelete(commit._id);
                          handleClickOpen();
                        }}
                      />
                    </li>
                  )
                })}
              </ul> : <p className="errorString">{TEXT.TIMELINE_PAGE.ERRORMESSAGE}</p>
          }
        </div>
      </div>
      <ConfirmationDailog open={openDialog} onClose={handleClose} deleteSnapshot={()=>{return deleteCommit(idToDelete)}}/>
  
    </div>
    
  );
};

export default Timeline;
