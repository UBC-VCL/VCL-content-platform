import React, { useState, useEffect } from "react";
import './Timeline.css';
import TimelineSearchbar from '@components/TimelineSearchbar';
import TimelineFilter from "./TimelineFilter";
import TimelineCommitBlock from "@components/TimelineCommitBlock";
import axios from "axios";

// dummy data
/*
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
*/
interface TimelineProps {}

export type SnapShot = {
    author: {username: string};
    categories: string[];
    contributors: string[];
    date: string;
    description: string;
    imageURL: string;
    project: string;
    title: string;
    updatedAt: string;
    _v: number;
    _id: string;
}

const Timeline: React.FC<TimelineProps> = (props) => {
  let prjs: any[] = []

  let [commits, setCommits] = useState<SnapShot[]>([]);
  let [allCommits, setAllCommits] = useState<SnapShot[]>([]);

  useEffect(() => {
    //fetch data
    axios
      .get('http://localhost:4000/api/snapshots')
      .then(response => {
        setCommits(response.data.data);
        setAllCommits(response.data.data);
        console.log(commits);
        console.log(response.data.data);
       
      });
  }, []);

  // hardcode className to display corresponding colors
  commits.forEach(commit => {
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
      <TimelineSearchbar commits={commits} setCommits={setCommits} allCommits={allCommits}/> 
      <TimelineFilter  setCommits={setCommits} allCommits={allCommits}/>
      <div className="timeline-main-body">
        <div className="timeline-container">
          <ul>
            {commits.map((commit,i)=> {
              return (
                <li>
                  <span className={"timeline-container-span-"+prjs[i]}></span>
                  <TimelineCommitBlock 
                    author={commit.author.username} 
                    elementChanged={commit.title} 
                    project={commit.project} 
                    date={commit.date} 
                    description={commit.description} 
                    tags={commit.categories} 
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