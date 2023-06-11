import React from "react";
import './Timeline.css';
import { FilterOBJ } from "./types";
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
    elementChanged: string;
    project: string;
    date: Date;
    descriptions: Array<string>;
    hyperlinks: Array<string>;
    contributors: Array<string>;
    updatedTime: string;
    tags: Array<string>;
  }

  // An array of all timineline history that will be set by retrieveCommitOBJs()
  //  If there are any errors in the retrieveCommitOBJs() than an empty array will be set as the display
  const [commitsArray, setCommitArray] = useState<SnapshotOBJ[]>([]);

  // If the reuqest for the list of timelines is successful than success = true,
  //  else success = false with "success" defaulted to true
  const [success, setSuccess] = useState<boolean>(true)

  // An object containing a the necessary conditions of how the user wants to filter or search for snapshots
  const [filterBy, setFilter] = useState<FilterOBJ>({
    project: ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Project'],
    category: ['Website', 'Meeting', 'Workshop'],
    date: "",
    author: ['One', 'two', 'three']
  })

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

  // filters through an array and filters corresponding to an object structuring what to filter the list for
  //  The filter object may have properties of an empty string meaning that it should not be filter for
  const filterList = (list: SnapshotOBJ[], filterOBJ: FilterOBJ) => {

    // this is the copy of the list that you want to filter
    var listFilter: SnapshotOBJ[] = list

    // if (filterOBJ.project.length !== 0) {
    //   listFilter = listFilter.filter(item => filterOBJ.project.includes(item.project))
    // }
    // listFilter = listFilter.filter(item => filterOBJ.project.includes(item.project))

    Object.entries(filterOBJ).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        if (key === "project") {console.log(listFilter.filter(item => value.includes(item.project)))}
        // listFilter = listFilter.filter(item => value.includes(item.project))
        if (key === "category") {
          // console.log(listFilter.filter(item => value.includes(item.tags)))
          console.log(console.log(listFilter.filter(item => item.tags.some(element => value.includes(element)))))
          }
        // listFilter = listFilter.filter(item => value.includes(item.tags))
        if (key === "author") {console.log(key)}
        // listFilter = listFilter.filter(item => value.includes(item.author))
        // console.log(listFilter)
      } 
      // else {
      //   // add date calculator
      // }
    })
    // // category in the filter box are labelled as tags
    // if (filterOBJ.category.length !== 0) {
    //   listFilter.filter(e => {
    //     e.tags.map(element => {
    //       filterOBJ.category.includes(element)
    //     })
    //   })
    // }

    return (
      <ul>
        {listFilter.map((commit: SnapshotOBJ, i) => {
          return (
            <li key={i}>
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
                tags={commit.tags}
              />
            </li>
          )
        })}
      </ul>
    )
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
      <TimelineFilter setFilter={setFilter} filterBy={filterBy} />
      <div className="timeline-main-body">
        <div className="timeline-container">
          {
            success ?
              // <ul>
              //   {commitsArray.map((commit: SnapshotOBJ, i) => {
              //     return (
              //       <li key={i}>
              //         <span className={"timeline-container-span-" + prjs[i]}></span>
              //         <TimelineCommitBlock
              //           author={commit.author}
              //           elementChanged={commit.elementChanged}
              //           project={commit.project}
              //           date={commit.date}
              //           descriptions={commit.descriptions}
              //           contributors={commit.contributors}
              //           hyperlinks={commit.hyperlinks}
              //           updatedTime={commit.updatedTime}
              //           tags={commit.tags}
              //         />
              //       </li>
              //     )
              //   })}
              // </ul>
              filterList(commitsArray, filterBy)
              : <p className="errorString">{TEXT.TIMELINE_PAGE.ERRORMESSAGE}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Timeline;
