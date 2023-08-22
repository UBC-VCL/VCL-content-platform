import react from 'react';
import { useState } from 'react'
import './People.css'

const People = () => {

    const dummyList = ['Supervisors', 'Correlation', 'IDEO', 'IT', 'NOVA', 'Perceptiual Modes']

    //TODO:
    //  you will dynamically render all the members for each of the respective projects when the
    //  user is to swtich between projects.
    //      - Make a http request everytime the desired project changes

    // TODO: 
    //  Given the grid items, when the user is to click on them the page will filter automatically
    //      - The clicked on item should be highlighted


    // the page will be defaulted to bein on the first grid item
    const [currentProject, setCProject] = useState<string>("Supervisors")


    return (
        <>
            <div className='main-content'>

                <div className='project-header'>
                    <h1 className='page-title'>
                        OUR TEAM
                    </h1>
                    <h4 className='page-description'>
                        Meet the members of our lab and their respective teams
                    </h4>
                </div>
                {/*
                    The items within the grid should be done dynamically, it should have inline styling for the number of items, instead of it being inside the css 
                     - An issue that comes with this is the that the nav bar width will become too wide and some titles will not fit within each grid component 
                */}
                <div className='page-nav'>
                    {
                        dummyList.map((item: string, index: number) => {
                            return (
                                <div key={index} className='nav-item'
                                    onClick={() => {
                                        // remove the 'selected-items' className before setting a new currentProject
                                        document.getElementById(currentProject.toLowerCase())!.classList.remove('selected-item')
                                        setCProject(item)
                                        document.getElementById(item.toLowerCase())!.classList.add('selected-item')
                                    }}
                                >
                                    <div className='hover-item' id={item.toLowerCase()}>
                                        {item}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='content-display'>

                </div>
            </div>

        </>
    )
}

export default People;