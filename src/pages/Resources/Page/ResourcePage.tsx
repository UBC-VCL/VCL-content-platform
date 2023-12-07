import './ResourcePage.css'
import { RouteComponentProps } from "react-router-dom";
import RESOURCES from '@statics/resources';
import { useEffect, useState } from 'react';
import { fi } from 'date-fns/locale';
import { BorderLeft } from '@mui/icons-material';

interface MatchParams {
    resource_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> { }
const ResourcePage: React.FC<ProjectProps> = ({ match }) => {

    const currentResource = RESOURCES.CONTENT.find((resource) => resource.title === match.params.resource_id);

    const [navHeight, setNavHeight] = useState<number>(0);
    const [filterList, setFilterList] = useState<string[]>([]);

    // to keep track of the height of the navbar
    useEffect(() => {
        if (window.innerWidth <= 700) {
            setNavHeight(document.getElementById("mobile-navbar-container")!.offsetHeight);
        } else {
            setNavHeight(document.getElementById("nav")!.offsetHeight);
        }

    }, []); // Empty dependency array ensures that the effect runs only once on mount

    currentResource?.content.map((item) => {
        if (typeof item.release === 'string') {
            if (!filterList.includes(item.release)) {
                setFilterList([...filterList, item.release])
            }
        } else {
            if (!filterList.includes(item.release.getFullYear().toString())) {
                setFilterList([...filterList, item.release.getFullYear().toString()])

            }
        }
    })

    return (
        <div className='resource-page-container' style={{ marginTop: navHeight }}>
            <div className='resource-page-title-container'>
                <h1 className='resource-page-title'>
                    {currentResource?.page_title}
                </h1>
            </div>
            <div className='resource-grid-menu' style={{ gridTemplateColumns: `repeat(${filterList.length}, 1fr)` }}>
                {
                    filterList.map((item, index) => {
                        return (
                            <div className='resource-grid-menu-item' key={index} style={{ borderLeft: index !== 0 ? '1px solid black' : 'none',  borderRight: index !== filterList.length-1 ? '1px solid black' : 'none'}}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ResourcePage;