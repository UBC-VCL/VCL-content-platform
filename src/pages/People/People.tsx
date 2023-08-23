import react from 'react';
import { useState, useEffect } from 'react'
import './People.css'
import img1 from '../../components/ProjectGallery/media/blank-profile-picture.webp'
import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;

const People = () => {

    interface MemberOBJ {
        name: {
            firstname: string,
            lastname: string,
        }
        project: string,
        position: string,
        contact: {
            email?: string,
            linkedIn?: string,
            phoneNumber?: string
        }
    }

    const dummyList: Array<string> = ['Supervisors', 'Correlation', 'IDEO', 'IT', 'NOVA', 'Perceptual Modes']

    const memberDummyList: Array<MemberOBJ> = [
        {
            name: { firstname: 'John', lastname: 'Doe' },
            project: 'Correlation',
            position: 'Something1',
            contact: { linkedIn: 'ryanyae', email: '123456@gmail.com', phoneNumber: "(123)-456-7890" }
        },
        {
            name: { firstname: 'Jane', lastname: 'Doe' },
            project: 'IDEO',
            position: 'Something2',
            contact: { linkedIn: 'ryanyae', email: '123456@gmail.com' }
        },
        {
            name: { firstname: 'JKoe', lastname: 'Doe' },
            project: 'IT',
            position: 'Something3',
            contact: { linkedIn: 'ryanyae', email: '123456@gmail.com' }
        },
        {
            name: { firstname: 'Jane', lastname: 'Doe' },
            project: 'NOVA',
            position: 'Something4',
            contact: { linkedIn: 'ryanyae', email: '123456@gmail.com' }
        },
        {
            name: { firstname: 'Jane', lastname: 'Doe' },
            project: 'Perceptual Modes',
            position: 'Something5',
            contact: { linkedIn: 'ryanyae', email: '123456@gmail.com' }
        },
        {
            name: { firstname: 'Jane', lastname: 'Doe' },
            project: 'Perceptual Modes',
            position: 'Supervisors',
            contact: { linkedIn: 'ryanyae', email: '123456@gmail.com' }
        }
    ]

    // This is for styles, will highlight the first select nav-item for the user
    useEffect(() => {
        document.getElementById(dummyList[0].toLowerCase())!.classList.add('selected-item')
        getMembers()
    }, [])

    const [currentList, setList] = useState<Array<MemberOBJ>>([])

    const getMembers = async () => {
        axios.get(
            // `${baseURL}/api/members`
            "http://localhost:4000/api/members/allMembers").then((response) => [
                console.log(response)
            ])
    }

    //TODO:
    //  you will dynamically render all the members for each of the respective projects when the
    //  user is to swtich between projects.
    //      - Make a http request everytime the desired project changes

    // the page will be defaulted to bein on the first grid item
    const [currentProject, setCProject] = useState<string>(dummyList[0])

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
                    <div className='member-list'>
                        {
                            memberDummyList.filter((item) => {
                                return( item.position.toLowerCase() === currentProject.toLowerCase() || item.project.toLowerCase() === currentProject.toLowerCase())
                            }).map((item, index) => {

                                return (
                                    <div key={index} className='member'>
                                        <div className='image-container'>
                                            <img className='image' src={img1}></img>
                                        </div>
                                        <div className='info-container'>
                                            <div className='name'>
                                                <h2>
                                                    {item.name.firstname + " " + item.name.lastname}
                                                </h2>
                                            </div>
                                            <div className='position'>
                                                <h3>
                                                    {item.position}
                                                </h3>
                                            </div>
                                            <div className='message'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </div>
                                            <div className='contact-container'>
                                                Contact:
                                                {
                                                    Object.values(item.contact).map((item2, index) => {
                                                        return (
                                                            <h3 key={index} className='contact-item'>
                                                                {item2}
                                                            </h3>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default People;