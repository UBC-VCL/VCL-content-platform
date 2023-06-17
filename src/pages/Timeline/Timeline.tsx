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
    title: string;
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

  // An object containing a the necessary conditions of how the user wants to filter or search for snapshots
  // Have to make this more universal somehow, this exact same list is in TimelineFilter.tsx
  // But this is the intial state of which snapshots to show, the list in TimeineFilter.tsx outlines which options to choose
  const [filterBy, setFilter] = useState<FilterOBJ>({
    project: ['Correlation', 'NOVA', 'SHIVA', 'IDEO', 'Project'],
    category: ['Website', 'Meeting', 'Workshop'],
    date: "All",
    author: ['Samanshiang Chiang', 'Michael Rotman', 'John Doe', 'Jane Doe'],
    keyword: ""
  })

  // creates a http request
  const objCommitHTTPS = async () => {

    /* 
      Structure of a snapshot object from the retrieved list

      { author: string
      categories: string[]
      contributors: string[]
      date: date
      description: string
      imageURL: string
      project: string
      title: string
      _id: string
      } 
    */
    await axios.get("http://localhost:4000/api/snapshots")
      .then(response => {

        // list for the commitsArray useState
        var commitList = response.data.data.map((item: SnapshotOBJ) => ({
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
  const filterList = (list: SnapshotOBJ[], filterOBJ: FilterOBJ) => {

    // this is the copy of the list that you want to filter
    var listFilter: SnapshotOBJ[] = list

    Object.entries(filterOBJ).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        if (key === "project") {
          listFilter = listFilter.filter(item => value.includes(item.project))
        }
        if (key === "category") {
          listFilter = listFilter.filter(item =>
            item.categories.some(element => value.includes(element)
            ))
        }
        if (key === "author") {
          listFilter = listFilter.filter(item => value.includes(item.author))
        }
      }
      else {
        if (key === 'date') {
          const currentDate = new Date()

          if (value === "Last day")
            listFilter = listFilter.filter(item => dateCalc(1, currentDate, new Date(item.date)))
          if (value === "Last month")
            listFilter = listFilter.filter(item => dateCalc(31, currentDate, new Date(item.date)))
          if (value === "Last year")
            listFilter = listFilter.filter(item => dateCalc(365, currentDate, new Date(item.date)))
        }

        if (key === 'keyword' && value !== "") {
          listFilter = commitsArray.filter((item: SnapshotOBJ) => {
            console.log(value);
            const result = Object.entries(item).some((entry: [string, any]) => {
              const [entryKey, entryValue] = entry;
              if (typeof entryValue !== 'string') {
                return entryValue.some((element: string) => element.split(" ").includes(value));
              } else {
                return entryValue.split(" ").includes(value);
              }
            });
            return result;
          });
        }
        
      }
    })
    return (
      <ul>
        {listFilter.map((commit: SnapshotOBJ, i) => {
          return (
            <li key={i}>
              <span className={"timeline-container-span-" + prjs[i]}></span>
              <TimelineCommitBlock
                author={commit.author}
                elementChanged={commit.title}
                project={commit.project}
                date={commit.date}
                descriptions={commit.descriptions}
                contributors={commit.contributors}
                hyperlinks={commit.hyperlinks}
                updatedTime={commit.updatedTime}
                tags={commit.categories}
              />
            </li>
          )
        })}
      </ul>
    )
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
              filterList(commitsArray, filterBy) : <p className="errorString">{TEXT.TIMELINE_PAGE.ERRORMESSAGE}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Timeline;
