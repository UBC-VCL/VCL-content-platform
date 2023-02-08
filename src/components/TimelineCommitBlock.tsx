import React, {useState} from "react";
import moment from "moment";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { useAuthStore } from "stores/AuthStore";

interface TimelineCommitBlockProps {
    _id: ObjectId
    author: string;
    elementChanged: string;
    project: string;
    date: Date;
    description: string;
    categories: Array<string>;
}

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

const TimelineCommitBlock: React.FC<TimelineCommitBlockProps> = (props) => {
    const { _id, author, elementChanged, date, project,description, categories } = props;
    const isLoggedIn = useAuthStore((state) => state.access_token);
    const [expand, setExpand] = useState(false);
    return(
        <li key={`${props._id}`}>
            <span className={"timeline-container-span-decor"}
            style={{color: `${stringToColour(project)}`}}></span>
            <div className="timeline-commit-block"
                onClick={() => setExpand(!expand)}>
                <div className="timeline-content-col">
                <b>{author}</b> added {elementChanged} to <span><b style={{color: `${stringToColour(project)}`}}>{project}</b></span>
                    <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
                    <div className="timeline-commit-tag-container"> 
                        {categories.filter(t => t).map((tagName, i) => (
                            <p key={`${tagName}-${_id}-${i}`} className="timeline-commit-tag">
                                {tagName}
                            </p>
                        ))}
                    </div>
                    {expand && <p className="shortDescription">{description}</p>}
                </div>
                {isLoggedIn && <div className="timeline-edit-col">
                    <Link href={`/timeline/${_id?.toString()}/edit`}>
                        <button className="timeline-edit-button">
                            Edit
                        </button>
                    </Link>
                </div>}
            </div>
        </li>
    );
};

export default TimelineCommitBlock;
