import react from 'react';
import './People.css'

const People = () => {

    //TODO:
    //  you will dynamically render all the members for each of the respective projects when the
    //  user is to swtich between projects.
    //      - Make a http request everytime the desired project changes


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
                <div className='page-nav'>
                    <div className='nav-item'>
                        <div className='hover-item'>
                            Supervisors
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='hover-item'>
                            Correlation
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='hover-item'>
                            IDEO
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='hover-item'>
                            IT
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='hover-item'>
                            NOVA
                        </div>
                    </div>
                    <div className='nav-item'>
                        <div className='hover-item'>
                            Perceptual Modes
                        </div>
                    </div>
                </div>
                <div className='content-display'>

                </div>
            </div>

        </>
    )
}

export default People;