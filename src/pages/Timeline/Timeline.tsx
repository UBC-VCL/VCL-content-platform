import ProjectsMultiSelect from "@components/ProjectsMultiSelect/ProjectsMultiSelect";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import React from "react";
import "./Timeline.css";

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
      project: "Correlation",
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
  let colorOfProject = '#848484';
  
  return (
    <div className="Timeline">
      <div>Search bar</div>
      <div>Filter</div>
      <div className="timeline-main-body">
        <div className="timeline-container">
          <ul>
            {commitsArray.map((commit,i)=> {
              return (
                <li>
                  <span></span>
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
            {/* <li>
              <TimelineCommitBlock 
                author={"Samanshiang Chiang"} 
                elementChanged={"Documentation Website Updates"} 
                project={"Correlation"} 
                date={new Date('2022-05-23')} 
                description={"DDDescription"} 
                tags={['website', 'Meeting']} 
              />
            </li> */}
          </ul>
        </div>
      </div>
      <div>Bottom</div>
    </div>
  );
};

export default Timeline;
