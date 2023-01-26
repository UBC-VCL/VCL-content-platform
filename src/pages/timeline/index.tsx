import React from "react";
import TimelineSearchbar from '@/components/TimelineSearchbar';
import TimelineCommitBlock from "@/components/TimelineCommitBlock";
import TimelineFilter from "@/components/TimelineFilter";

// dummy data
const commitsArray = [{
      author: "Samanshiang Chiang",
      elementChanged: "Documentation Website Updates",
      project: "Correlation",
      date: new Date('2022-05-23'),
      description: "DDDescription", 
      tags: ['Website', 'Meeting'],
  }, {
      author: "Samanshiang Chiang",
      elementChanged: "Documentation Website Updates",
      project: "Correlation",
      date: new Date('2022-05-23'),
      description: "DDDescription", 
      tags: ['Website'],
  }, {
      author: "Samanshiang Chiang",
      elementChanged: "Documentation Website Updates",
      project: "NOVA",
      date: new Date('2022-05-23'),
      description: "DDDescription", 
      tags: ['Website'],
  }, {
      author: "Michael Rotman",
      elementChanged: "Element Name",
      project: "Project",
      date: new Date('2022-05-26'),
      description: "DDDescription", 
      tags: ['Website', 'Meeting'],
  }, {
      author: "Alicia Coleman",
      elementChanged: "Element Name",
      project: "Shiva",
      date: new Date('2021-06-03'),
      description: "DDDescription", 
      tags: ['workshop'],
  }, {
      author: "Russell Black",
      elementChanged: "Documentation Website Updates",
      project: "IDEO",
      date: new Date('2022-05-23'),
      description: "DDDescription", 
      tags: ['Meeting'],
  }]

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = (props) => {
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
          TIMELINE
        </h1>
      </div>
      <div className='timeline-sub-header'>
        <p>Browse project history and detailed updates</p>
      </div>
      <TimelineSearchbar /> 
      <TimelineFilter />
      <div className="timeline-main-body">
        <div className="timeline-container">
          <ul>
            {commitsArray.map((commit,i)=> {
              return (
                <li>
                  <span className={"timeline-container-span-"+prjs[i]}></span>
                  <TimelineCommitBlock 
                    author={commit.author} 
                    elementChanged={commit.elementChanged} 
                    project={commit.project} 
                    date={commit.date} 
                    description={commit.description} 
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
