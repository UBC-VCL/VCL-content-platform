import './ResourcePage.css'
import { RouteComponentProps } from "react-router-dom";
import RESOURCES from '@statics/resources';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface MatchParams {
    resource_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> { }
const ResourcePage: React.FC<ProjectProps> = ({ match }) => {

    const history = useHistory();
    const currDate = new Date();

    const currentResource = RESOURCES.CONTENT.find((resource) => resource.title === match.params.resource_id);

    const [navHeight, setNavHeight] = useState<number>(0);
    const [filterDates, setFilterDates] = useState<string[]>([currDate.getFullYear().toString(), (currDate.getFullYear() - 1).toString(), (currDate.getFullYear() - 2).toString()]);
    const [currentFilter, setFilter] = useState<string>(currentResource!.headers ? currentResource!.headers[0] : filterDates[0]);

    useEffect(() => {
        document
            .getElementById(currentFilter)!
            .classList.add("selected-item");
    }, [])

    useEffect(() => {
        // error handling for pages that do not exist yet
        if (currentResource === undefined) {
            // throw new Error('Resource not found');
            history.push('/');
        }

        // to keep track of the height of the navbar

        if (window.innerWidth <= 700) {
            setNavHeight(document.getElementById("mobile-navbar-container")!.offsetHeight);
        } else {
            setNavHeight(document.getElementById("nav")!.offsetHeight);
        }

    }, []); // Empty dependency array ensures that the effect runs only once on mount

    return (
        <>
            <div className='resource-page-container' style={{ marginTop: navHeight }}>
                <div className='resource-page-title-container'>
                    <h1 className='resource-page-title'>
                        {currentResource?.page_title}
                    </h1>
                </div>
                <div className='resource-content-containers' style={{ gridTemplateColumns: `repeat(${currentResource!.headers ? currentResource!.headers.length : 3}, 1fr)` }}>
                    {
                        currentResource!.headers ? currentResource!.headers.map((title, index) => {

                            return (
                                <div className='single-resource-content-section' key={index} style={{ borderRight: `${index != currentResource!.headers!.length - 1 ? "2px solid #000" : ""}` }}>
                                    <div className='single-resource-grid-item' id={title}
                                        onClick={() => {
                                            // remove the 'selected-items' className before setting a new currentProject
                                            document
                                                .getElementById(currentFilter)!
                                                .classList.remove("selected-item");
                                            setFilter(title);
                                            document
                                                .getElementById(title)!
                                                .classList.add("selected-item");
                                        }}
                                    >
                                        {title}
                                    </div>
                                </div>
                            );
                        }) : filterDates.map((date, index) => {

                            return (
                                <div className='single-resource-content-section' key={index}>
                                    <div className='single-resource-grid-item'
                                        id={date}
                                        onClick={() => {
                                            // remove the 'selected-items' className before setting a new currentProject
                                            document
                                                .getElementById(currentFilter)!
                                                .classList.remove("selected-item");
                                            setFilter(date);
                                            document
                                                .getElementById(date)!
                                                .classList.add("selected-item");
                                        }}
                                    >
                                        {date}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className='resource-content-render-container'>
                {
                    currentResource!.headers ?
                        currentResource!.headers.map((title, index) => {
                            return (
                                <>
                                    <div className='resource-content-single-render-category' key={index}>
                                        <h1 className='resource-content-single-render-category-title'>
                                            {title}
                                        </h1>
                                    </div>
                                    <div className='resource-content-single-render-category-content'>
                                        {
                                            currentResource!.content.filter((item) => {
                                                return item.category == title;
                                            }).map((item, index) => {
                                                return (
                                                    <div className='resource-content-single-render' key={index}>
                                                        <div className='resource-content-single-render-image-container'>
                                                            <img src={item.img} alt='NO IMAGE'></img>
                                                        </div>
                                                        <div className='resource-content-single-render-text-container'>
                                                            <h1>
                                                                {item.title}
                                                            </h1>
                                                            <div className='resource-content-single-render-text-names-container'>
                                                                {
                                                                    item.author.map((name, index) => {
                                                                        return index !== item.author.length - 1 ? <h2>{name}, &nbsp;</h2> : <h2>{name}</h2>
                                                                    })
                                                                }
                                                            </div>
                                                            <p>
                                                                {item.intro}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        }) :

                        <>
                            {filterDates.map((date, index) => {
                                return (
                                    <>
                                        <div className='resource-content-single-render-category' key={index}>
                                            <h1 className='resource-content-single-render-category-title'>
                                                {date}
                                            </h1>
                                        </div>
                                        <div className='resource-content-single-render-category-content'>
                                            {
                                                currentResource!.content.filter((item) => {
                                                    const year: number = (item.category as Date).getFullYear();
                                                    return year === Number(date);
                                                }).map((item, index) => {
                                                    return (
                                                        <div className='resource-content-single-render' key={index}>
                                                            <div className='resource-content-single-render-image-container'>
                                                                <img src={item.img} alt='NO IMAGE'></img>
                                                            </div>
                                                            <div className='resource-content-single-render-text-container'>
                                                                <h1>
                                                                    {item.title}
                                                                </h1>
                                                                <div className='resource-content-single-render-text-names-container'>
                                                                    {
                                                                        item.author.map((name, index) => {
                                                                            return index !== item.author.length - 1 ? <h2>{name}, &nbsp;</h2> : <h2>{name}</h2>
                                                                        })
                                                                    }
                                                                </div>
                                                                <p>
                                                                    {item.intro}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            })}
                            <div className='resource-content-single-render-category'>
                                <h1 className='resource-content-single-render-category-title'>
                                    Older Content
                                </h1>
                            </div>
                            <div className='resource-content-single-render-category-content'>
                                {
                                    currentResource!.content.filter((item) => {
                                        const year: number = (item.category as Date).getFullYear();
                                        return year < Number(filterDates[2]);
                                    }).map((item, index) => {
                                        return (
                                            <div className='resource-content-single-render' key={index}>
                                                <div className='resource-content-single-render-image-container'>
                                                    <img src={item.img} alt='NO IMAGE'></img>
                                                </div>
                                                <div className='resource-content-single-render-text-container'>
                                                    <h1>
                                                        {item.title}
                                                    </h1>
                                                    <div className='resource-content-single-render-text-names-container'>
                                                        {
                                                            item.author.map((name, index) => {
                                                                return index !== item.author.length - 1 ? <h2>{name}, &nbsp;</h2> : <h2>{name}</h2>
                                                            })
                                                        }
                                                    </div>
                                                    <p>
                                                        {item.intro}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div></>

                }

            </div>
        </>
    );
};

export default ResourcePage;