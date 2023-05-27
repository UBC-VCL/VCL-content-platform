import React from "react";
import './Timeline.css';
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from "./TimelineFilter";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import { TEXT } from '@statics';
import id from "date-fns/esm/locale/id/index";
import { useState } from 'react'

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
//       project: "NOVA",
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

interface TimelineProps {}

// the response from the server will be a list of objects, and the structure of a single obj is CommitOBJ
interface CommitOBJ {
  author:string;
  elementChanged:string;
  project:string;
  date:Date;
  descriptions:string[];
  hyperlinks:string[];
  contributors:string[];
  updatedTime:string;
  tags:string[];
}

const retrieveCommitOBjs = () => {
  
}

const Timeline: React.FC<TimelineProps> = (props) => {

  const [commitsArray, setCommitArray] = useState<CommitOBJ[]>([]);

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
          <ul>
            {commitsArray.map((commit, i)=> {
              return (
                <li key={i}>
                  <span className={"timeline-container-span-"+prjs[i]}></span>
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
        </div>
      </div>
    </div>
  );
};

export default Timeline;
