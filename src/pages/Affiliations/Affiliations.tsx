
import { useState, useEffect} from "react";
import "./Affiliations.css"
import dotenv from "dotenv";
import AFFILIATIONS from "@statics/affiliations";
import { HiOutlineExternalLink } from "react-icons/hi";






dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;
const IS_WIP = process.env.REACT_APP_WIP === "development";

interface Affiliation {
    type: string;
    content: {
        title: string;
        href: string;
        pi?: string[];
        faculty?: string[];
        desc?: string;
    }[];
}

interface AffiliationContent {
    title: string;
    href: string;
    pi?: string[];
    faculty?: string[];
    desc?: string;
}



const SingleAffiliation = (props: {data: AffiliationContent, index: number}) => {
    // This checks whether the user is browsing the website on a phone 
    // This would help us render certain components differently
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 500);

    // This is there just to check if the user resizes the screen width on a device
    // it will mount the changes if the screen width changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const titleWithLink = isMobile ? (
        <a href={props.data.href} target="_blank">
          <h2>{props.data.title}</h2>
        </a>
      ) : (
        <h2>{props.data.title}</h2>
      );

    return (
        <div key={props.index} className="affiliation">
          <div className="info-container">
            <div className="affiliation-name">
                {titleWithLink}
            </div>
            {props.data.pi &&
                <div className="affiliation-position">
                    <span>{"PI: " + props.data.pi.map((item:string) => item)}</span>
                </div>
            }
            {props.data.faculty &&  
                <div className="affiliation-position">
                    <span>{"Faculty: " +  props.data.faculty.map((item:string) => item)}</span>
                </div>
            }
          </div>
          {!isMobile && (
            <div className="icon-container">
            <a href={props.data.href} target="_blank">
                <HiOutlineExternalLink className="icon"/>
            </a>
            </div>
          )}
        </div>
      )
}

const Affiliations = () => {
    


    const [page,setPage] = useState<string>("UBC Labs");

    const navList: Array<string> = [
        "UBC Labs",
        "Other Universities",
        "Affiliated Programs",
    ];

    const filteredAffiliations = AFFILIATIONS.CONTENT.filter((item: Affiliation) => item.type === page);

    return(
        <>
            <div className="main-content">
                <div className="project-header">
                    <h1 className="affiliation-page-title">Affiliations</h1>
                    <h4 className="affiliation-page-description">Affiliated labs and programs</h4>
                </div>
                <div className="page-nav">
                    {navList.map((item: string, index: number) => {
                        return(
                            <div key={index} className="nav-item" onClick={() => setPage(item)}>
                                <div className={`hover-item ${page === item? "selected-item": ""}`} id={item.toLowerCase()}>
                                    {item}
                                </div>
                            </div>
                        );
                    })

                    }
                </div>
               
                <div className="affiliations-list">
                    {filteredAffiliations[0].content.map((item: AffiliationContent, index: number) => 
                        <SingleAffiliation data={item} index={index}></SingleAffiliation>
                    )}
                </div>
                
            </div>
        </>
    );

}

export default Affiliations;

