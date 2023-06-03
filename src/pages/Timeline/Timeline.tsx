import React from "react";
import './Timeline.css';
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from "./TimelineFilter";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import { TEXT } from '@statics';
import id from "date-fns/esm/locale/id/index";
import { useState, useEffect } from 'react'
import axios from 'axios'


// dummy data
// const commitsArray = [{
//       author: "Samanshiang Chiang",
//       elementChanged: "Documentation Website Updates",
//       project: "Correlation",
//       date: new Date('2022-05-23'),
//       descriptions: [
//         "Completed changes to timeline mockups. Added \"Author\" category to the original three category filter bar to better refine timeline entry categorization and search time. ",
//         "Added hover effect for individual timeline entries, created expanded entry display on timeline mockup to showcase on-click effect. Removed default descriptions on Projects, Acbout, and Resources with descriptions from VCL's website. Created timeline entry form mockup."
//       ], 
//       hyperlinks:[
//         "www.google.com",
//         "www.google.com",
//       ],
//       contributors: [
//         "Sally Lim",
//         "John Doe"
//       ],
//       updatedTime: "Last Edited on June 6, 2021 21: 49 by Kevin Peng",
//       tags: ['Website', 'Meeting'],
//   }, {
//       author: "Samanshiang Chiang",
//       elementChanged: "Documentation Website Updates",
//       project: "Correlation",
//       date: new Date('2022-05-23'),
//       descriptions: [
//         "Completed changes to timeline mockups. Added \"Author\" category to the original three category filter bar to better refine timeline entry categorization and search time. ",
//         "Added hover effect for individual timeline entries, created expanded entry display on timeline mockup to showcase on-click effect. Removed default descriptions on Projects, Acbout, and Resources with descriptions from VCL's website. Created timeline entry form mockup."
//       ], 
//       hyperlinks:[
//         "www.google.com",
//         "www.google.com",
//       ],
//       contributors: [
//         "Sally Lim",
//         "John Doe"
//       ],
//       updatedTime: "Last Edited on June 6, 2021 21: 49 by Kevin Peng",
//       tags: ['Website'],
//   }, {
//       author: "Samanshiang Chiang",
//       elementChanged: "Documentation Website Updates",
//       project: "v",
//       date: new Date('2022-05-23'),
//       descriptions: [
//         "Completed changes to timeline mockups. Added \"Author\" category to the original three category filter bar to better refine timeline entry categorization and search time. ",
//         "Added hover effect for individual timeline entries, created expanded entry display on timeline mockup to showcase on-click effect. Removed default descriptions on Projects, Acbout, and Resources with descriptions from VCL's website. Created timeline entry form mockup."
//       ], 
//       hyperlinks:[
//         "www.google.com",
//         "www.google.com",
//       ],
//       contributors: [
//         "Sally Lim",
//         "John Doe"
//       ],
//       updatedTime: "Last Edited on June 6, 2021 21: 49 by Kevin Peng",
//       tags: ['Website'],
//   }, {
//       author: "Michael Rotman",
//       elementChanged: "Element Name",
//       project: "Project",
//       date: new Date('2022-05-26'),
//       descriptions: [
//         "Completed changes to timeline mockups. Added \"Author\" category to the original three category filter bar to better refine timeline entry categorization and search time. ",
//         "Added hover effect for individual timeline entries, created expanded entry display on timeline mockup to showcase on-click effect. Removed default descriptions on Projects, Acbout, and Resources with descriptions from VCL's website. Created timeline entry form mockup."
//       ], 
//       hyperlinks:[
//         "www.google.com",
//         "www.google.com",
//       ],
//       contributors: [
//         "Sally Lim",
//         "John Doe"
//       ],
//       updatedTime: "Last Edited on June 6, 2021 21: 49 by Kevin Peng",
//       tags: ['Website', 'Meeting'],
//   }, {
//       author: "Alicia Coleman",
//       elementChanged: "Element Name",
//       project: "Shiva",
//       date: new Date('2021-06-03'),
//       descriptions: [
//         "Completed changes to timeline mockups. Added \"Author\" category to the original three category filter bar to better refine timeline entry categorization and search time. ",
//         "Added hover effect for individual timeline entries, created expanded entry display on timeline mockup to showcase on-click effect. Removed default descriptions on Projects, Acbout, and Resources with descriptions from VCL's website. Created timeline entry form mockup."
//       ], 
//       hyperlinks:[
//         "www.google.com",
//         "www.google.com",
//       ],
//       contributors: [
//         "Sally Lim",
//         "John Doe"
//       ],
//       updatedTime: "Last Edited on June 6, 2021 21: 49 by Kevin Peng",
//       tags: ['workshop'],
//   }, {
//       author: "Russell Black",
//       elementChanged: "Documentation Website Updates",
//       project: "IDEO",
//       date: new Date('2022-05-23'),
//       descriptions: [
//         "Completed changes to timeline mockups. Added \"Author\" category to the original three category filter bar to better refine timeline entry categorization and search time. ",
//         "Added hover effect for individual timeline entries, created expanded entry display on timeline mockup to showcase on-click effect. Removed default descriptions on Projects, Acbout, and Resources with descriptions from VCL's website. Created timeline entry form mockup."
//       ], 
//       hyperlinks:[
//         "www.google.com",
//         "www.google.com",
//       ],
//       contributors: [
//         "Sally Lim",
//         "John Doe"
//       ],
//       updatedTime: "Last Edited on June 6, 2021 21: 49 by Kevin Peng",
//       tags: ['Meeting'],
//   }]

interface TimelineProps { }

const Timeline: React.FC<TimelineProps> = (props) => {

  // the response from the server will be a list of objects, and the structure of a single obj is CommitOBJ
  interface CommitOBJ {
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
  const [commitsArray, setCommitArray] = useState<CommitOBJ[]>([]);

  // If the reuqest for the list of timelines is successful than success = true,
  //  else success = false with "success" defaulted to true
  const [success, setSuccess] = useState<boolean>(true)

  // creates a http request
  const objCommitHTTPS = async (): Promise<CommitOBJ[]> => {
    var returnData: CommitOBJ[] = []

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
                {commitsArray.map((commit: CommitOBJ, i) => {
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
              </ul> : <p className="errorString">{TEXT.TIMELINE_PAGE.ERRORMESSAGE}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Timeline;
