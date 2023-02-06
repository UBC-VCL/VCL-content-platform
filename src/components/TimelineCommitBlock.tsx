import React, {useState} from "react";
import moment from "moment";
import { NAV, TEXT, CONSTANTS } from '@/statics';

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

const stringToColour = (str: string) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }

const ExpandedTimelineContent: React.FC<TimelineCommitBlockProps> = (props) => {
    const { author, elementChanged, date, project,description, tags } = props;
    
    return(
        <div className="expandedTimeline">
            <p className="timeline-commit-header">
                <b>{author}</b> added {elementChanged} to <span style={{display: 'inline', color: `${stringToColour(project)}`}}><b>{project}</b></span>
            </p>
            <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
            <div className="timeline-commit-tag-container"> 
                {tags.filter(t => t).map((tagName) => (
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

    return(
        <div className="closedTimeline">
            <p className="timeline-commit-header">
                <b>{author}</b> added {elementChanged} to <span style={{display: 'inline', color: `${stringToColour(project)}`}}><b>{project}</b></span>
            </p>
            <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
            <div className="timeline-commit-tag-container"> 
                {tags.filter(t => t).map((tagName) => (
                    <div className="timeline-commit-tag">
                        {tagName}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimelineCommitBlock;
