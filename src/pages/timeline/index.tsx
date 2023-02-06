import React from "react";
import TimelineSearchbar from '@/components/TimelineSearchbar';
import TimelineCommitBlock from "@/components/TimelineCommitBlock";
import TimelineFilter from "@/components/TimelineFilter";
import { connectToDB } from "utils/helpers/server/connect";


export async function getServerSideProps() {
  const { db } = await connectToDB()
  const snapshots = await db.collection('snapshots').find({}).sort('date', -1).toArray();
  const data = await Promise.all(snapshots.map(async (snapshot) => ({...snapshot, author: await db.collection("users").findOne({ _id: snapshot.author })})))
  console.log({data})
  return { props: { commitsArray: JSON.parse(JSON.stringify(data)) } };
}

type TimelineProps = {
  commitsArray: any[]
}

const Timeline: React.FC<TimelineProps> = ({commitsArray}) => {
  
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
                  <span className={"timeline-container-span-"+commit.project}></span>
                  <TimelineCommitBlock 
                    author={commit.author?.username} 
                    elementChanged={commit.elementChanged} 
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
