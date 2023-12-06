import './ResourcePage.css'
import { RouteComponentProps } from "react-router-dom";
import RESOURCES from '@statics/resources';
import { useEffect, useState } from 'react';

interface MatchParams {
    resource_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> { }
const ResourcePage: React.FC<ProjectProps> = ({ match }) => {

    const currentResource = RESOURCES.CONTENT.find((resource) => resource.title === match.params.resource_id);

    const [navHeight, setNavHeight] = useState<number>(0);

    useEffect(() => {
        if (window.innerWidth <= 700) {
            console.log("<=700")
            setNavHeight(document.getElementById("mobile-navbar-container")!.offsetHeight);
            // console.log(document.getElementById("mobile-navbar-container")!.offsetHeight);
        } else {
            console.log(">700")
            setNavHeight(document.getElementById("nav")!.offsetHeight);
            // console.log(document.getElementById("nav")!.offsetHeight);
        }
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    console.log(currentResource);


    return (
        <div className='resource-page-container' style={{marginTop:navHeight}}>
            <div className='resource-page-title-container'>
                <h1 className='resource-page-title'>
                    {currentResource?.page_title}
                </h1>
            </div>
        </div>
    );
};

export default ResourcePage;