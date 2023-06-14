import React from "react";
import './Timeline.css';
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from "./TimelineFilter";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import { TEXT } from '@statics';
import id from "date-fns/esm/locale/id/index";
import { useState, useEffect } from 'react'
import axios from 'axios'

interface TimelineProps { }

const Timeline: React.FC<TimelineProps> = (props) => {

  // the response from the server will be a list of objects, and the structure of a single obj is CommitOBJ
  interface SnapshotOBJ {
    author: string;
    title: string;
    project: string;
    date: Date;
    categories: Array<string>;
    descriptions: Array<string>;
    hyperlinks: Array<string>;
    contributors: Array<string>;
    updatedTime: string;
  }
  // An array of all timineline history that will be set by retrieveCommitOBJs()
  //  If there are any errors in the retrieveCommitOBJs() than an empty array will be set as the display
  const [commitsArray, setCommitArray] = useState<SnapshotOBJ[]>([]);

  // If the reuqest for the list of timelines is successful than success = true,
  //  else success = false with "success" defaulted to true
  const [success, setSuccess] = useState<boolean>(true)

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
                  return (
                    <li key={i}>
                      <span className={"timeline-container-span-" + prjs[i]}></span>
                      <TimelineCommitBlock
                        author={commit.author}
                        title={commit.title}
                        project={commit.project}
                        date={commit.date}
                        categories={commit.categories}
                        descriptions={commit.descriptions}
                        hyperlinks={commit.hyperlinks}
                        contributors={commit.contributors}
                        updatedTime={commit.updatedTime}
                      />
                    </li>
                  )
                })}
              </ul> : <p className="errorString">{TEXT.TIMELINE_PAGE.ERRORMESSAGE}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Timeline;
