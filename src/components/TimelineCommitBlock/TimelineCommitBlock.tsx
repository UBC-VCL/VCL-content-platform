import React, {useState} from "react";
import moment from "moment";
import { NAV, TEXT, CONSTANTS, ROUTES } from '@statics';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './TimelineCommitBlock.css';
import { useAppSelector } from '@redux/hooks';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';

interface TimelineCommitBlockProps {
    author: string;
    elementChanged: string;
    project: string;
    date: Date;
    title: String;
    descriptions: Array<string>;
    hyperlinks: Array<string>;
    contributors: Array<string>;
    updatedTime: string;
    isLoggedIn: boolean;
    categories: Array<string>;
    onClickDelete: ()=>void
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

    const {author, title, date, project, descriptions, hyperlinks, contributors, updatedTime, categories, onClickDelete, isLoggedIn} = props;

    let colorOfProject = '#848484';
    CONSTANTS.PROJECTS.forEach(element => {
        if (project.toLowerCase() === element.name.toLowerCase()) {
            colorOfProject = element.color;
        }
    });
    return(
        <div className="expandedTimeline">
            <p className="timeline-commit-header-text">
                <b>{author}</b> added {elementChanged} to <div style={{display: 'inline', color: `${colorOfProject}`}}><b>{project}</b></div>
            </p>

            {isLoggedIn ?
                <div className="timeline-commit-header-icons">
                    <BorderColorIcon style={{color: "rgb(188, 188, 188"}} /> 
                    <div className="vl"></div>
                    <DeleteOutlineIcon style={{color: "rgb(188, 188, 188"}} onClick={onClickDelete}/>
                </div>
                :
                <br />
            }

            <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
            <div className="timeline-commit-tag-container"> 

                {categories.map((category, i) => (
             <div key={i} className="timeline-commit-tag">
                        {category}


                    </div>
                ))}
            </div>
            <div className="timeline-commit-descriptions-container">
                {descriptions.map((desc, i) => (
                    <p key={i} className="descriptions-content">
                        {desc}
                    </p>
                ))}
            </div>
            <p className="timeline-commit-hyperlink">Reference/Image Hyperlinks:</p>
            <div className="timeline-commit-hyperlinks-container">
                {hyperlinks.map((link, i) => (
                    <div key={i} className="hyperlinks-content">
                        <Link to={"//" + link}
                            style={{color: "rgba(28,66,109,255)"}} 
                            target="_blank" 
                            rel="noreferrer"
                            >
                                HYPERLINK TO IMAGE
                        </Link>
                        <br />
                    </div>
                ))}
            </div>
            <div className='timeline-commit-divider'></div>  
            <p className="timeline-commit-contributor">Contributors:</p>
            <div className="timeline-commit-contributors-container">
                {contributors.map((contr, i) => (
                    <p key={i} className="contributors-content">
                        {contr} &emsp;
                    </p>
                ))}
            </div>
            <p className="timeline-commit-updatedTime">{updatedTime}</p>
        </div>
    );
}

const ClosedTimelineContent: React.FC<TimelineCommitBlockProps> = (props) => {

    const { author, title, date, project, categories, onClickDelete, isLoggedIn} = props;

    let colorOfProject = '#848484';
    // assuming all valid project props are the same as CONSTANTS.PROJECTS listed
    CONSTANTS.PROJECTS.forEach(element => {
        if (project.toLowerCase() === element.name.toLowerCase()) {
            colorOfProject = element.color;
        }
    });
    return(
        <div className="closedTimeline">
            <p className="timeline-commit-header-text">
                <b>{author}</b> added {elementChanged} to <div style={{display: 'inline', color: `${colorOfProject}`}}><b>{project}</b></div>
            </p>


            {isLoggedIn ?
                <div className="timeline-commit-header-icons">
                    <BorderColorIcon style={{color: "rgb(188, 188, 188"}} /> 
                    <div className="vl"></div>
                    <DeleteOutlineIcon style={{color: "rgb(188, 188, 188"}} onClick={onClickDelete}/>
                </div>
                :
                <br />
            }

            <p className="timeline-commit-date">{moment(date).format('MMMM DD, YYYY')}</p>
            <div className="timeline-commit-tag-container"> 
                {categories.map((category, i) => (
                    <div key={i} className="timeline-commit-tag">
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimelineCommitBlock;
