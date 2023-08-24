import React from "react"
import './ProjectPublication.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface PublicationDetails {
    name: string,
    citation: string,
    link: string
}

export const Publication: React.FC<PublicationDetails> = (props) => {
    return (
        <div className="publication-card">
            <a href={props.link} className="card-title" target="_blank" > {props.name} <OpenInNewIcon fontSize="small"/> </a> 
            <div className="publication-citation">
                <p>{props.citation}</p>
            </div>
        </div>
    )
}