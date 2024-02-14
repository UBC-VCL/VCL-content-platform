import './ResourcePage.css'
import { RouteComponentProps } from "react-router-dom";
import RESOURCES from '@statics/resources';
import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AddResource from './AddResource/AddResource';

interface MatchParams {
    resource_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> { }
const ResourcePage: React.FC<ProjectProps> = ({ match }) => {

    const history = useHistory();
    const currDate = new Date();

    const currentResource = RESOURCES.CONTENT.find((resource) => resource.name === match.params.resource_id);

    const [navHeight, setNavHeight] = useState<number>(0);
    const [filterDates, setFilterDates] = useState<string[]>([currDate.getFullYear().toString(), (currDate.getFullYear() - 1).toString(), (currDate.getFullYear() - 2).toString()]);
    const [isAddMenuVisible, setAddMenuVisible] = useState<boolean>(false);

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
            <AddResource isVisible={isAddMenuVisible} setVisible={setAddMenuVisible} />
            <div style={{ filter: isAddMenuVisible ? 'blur(10px)' : 'blur(0px)', transition: 'all 0.5s ease-in-out', }}>
                <div className='resource-page-container' style={{ marginTop: navHeight }}>
                    <div className='resource-page-title-container'>
                        <h1 className='resource-page-title'>
                            {currentResource?.page_title}
                        </h1>
                    </div>
                    {
                        <div className='resource-content-containers' style={{ gridTemplateColumns: `repeat(${currentResource!.headers ? currentResource!.headers.length : 4}, 1fr)` }}>
                            {
                                currentResource!.headers ? currentResource!.headers.map((title, index) => {

                                    return (
                                        <div className='single-resource-content-section' key={index} style={{ borderRight: `${index != currentResource!.headers!.length - 1 ? "2px solid #000" : ""}` }}>
                                            <div className='single-resource-grid-item' id={title}
                                                onClick={() => {
                                                    window.scrollTo({
                                                        top: document.getElementById(`resource-content-single-render-${title}`)?.offsetTop,
                                                        behavior: 'smooth'
                                                    });
                                                }}
                                            >
                                                {title}
                                            </div>
                                        </div>
                                    );
                                }) : <>
                                    {filterDates.map((date, index) => {

                                        return (
                                            <div className='single-resource-content-section' key={index}>
                                                <div className='single-resource-grid-item'
                                                    id={date}
                                                    onClick={() => {
                                                        window.scrollTo({
                                                            top: document.getElementById(`resource-content-single-render-${date}`)?.offsetTop,
                                                            behavior: 'smooth'
                                                        });
                                                    }}
                                                >
                                                    {date}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className='single-resource-content-section'>
                                        <div className='single-resource-grid-item'
                                            id='older-content'
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: document.getElementById("resource-content-single-render-olderContent")?.offsetTop,
                                                    behavior: 'smooth'
                                                });
                                            }}
                                        >
                                            Older Content
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    }
                </div>
                <div className='resource-content-render-container'>
                    {
                        currentResource!.headers ?
                            currentResource!.headers.map((title, index) => {
                                return (
                                    <>
                                        <div className='resource-content-single-render-category' key={index} id={`resource-content-single-render-${title}`}>
                                            <h1 className='resource-content-single-render-category-title'
                                            >
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
                                                                <img src={item.img} alt='NO IMAGE' id="resource-content-single-render-image"></img>
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
                                            <div className='resource-content-single-render-category' key={index} id={`resource-content-single-render-${date}`}>
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
                                    <h1 className='resource-content-single-render-category-title' id="resource-content-single-render-olderContent">
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
                                </div>
                            </>
                    }
                </div>
                <div className='add-resource-button-container'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        setAddMenuVisible(true);
                    }}>
                    Add New Resource
                </div>
            </div>
        </>
    );
};

export default ResourcePage;