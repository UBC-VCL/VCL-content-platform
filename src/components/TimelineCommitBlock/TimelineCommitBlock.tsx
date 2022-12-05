import React, {useState} from "react";
import moment from "moment";
import { NAV, TEXT, CONSTANTS, ROUTES } from '@statics';
import './TimelineCommitBlock.css';

interface TimelineCommitBlockProps {
    author: string;
    elementChanged: string;
    project: string;
    date: Date;
    description: string;
    tags: Array<string>;
}

const TimelineCommitBlock: React.FC<TimelineCommitBlockProps> = (props) => {
    const [expand, setExpand] = useState(false);

    return(
        <div className="timeline-commit-block"
             onClick={() => setExpand(!expand)}>
            { expand ? ExpandedTimelineContent(props): ClosedTimelineContent(props) }
        </div>
    );
};

const ExpandedTimelineContent: React.FC<TimelineCommitBlockProps> = (props) => {
    const { author, elementChanged, date, project,description, tags } = props;
    let colorOfProject = '#848484';
    CONSTANTS.PROJECTS.forEach(element => {
        if (project.toLowerCase() === element.name.toLowerCase()) {
            colorOfProject = element.color;
        }
    });
    
    return(
        <div className="expandedTimeline">
            <p className="timeline-commit-header">
                <b>{author}</b> added {elementChanged} to <div style={{display: 'inline', color: `${colorOfProject}`}}><b>{project}</b></div>
            </p>
            <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
            <div className="timeline-commit-tag-container"> 
                {tags.map((tagName) => (
                    <div className="timeline-commit-tag">
                        {tagName}
                    </div>
                ))}
            </div>
            <p className="shortDescription">{description}</p>
        </div>
    );
}

const ClosedTimelineContent: React.FC<TimelineCommitBlockProps> = (props) => {
    const { author, elementChanged, date, project, description, tags } = props;
    let colorOfProject = '#848484';
    CONSTANTS.PROJECTS.forEach(element => {
        if (project.toLowerCase() === element.name.toLowerCase()) {
            colorOfProject = element.color;
        }
    });

    return(
        <div className="closedTimeline">
            <p className="timeline-commit-header">
                <b>{author}</b> added {elementChanged} to <div style={{display: 'inline', color: `${colorOfProject}`}}><b>{project}</b></div>
            </p>
            <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
            <div className="timeline-commit-tag-container"> 
                {tags.map((tagName) => (
                    <div className="timeline-commit-tag">
                        {tagName}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimelineCommitBlock;
