import React from 'react';
import {TEXT, NAV, ROUTES} from '@statics';
import {useAppSelector} from '@redux/hooks';
import {selectProjects} from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link';
import './Footer.css'




const Footer = () => {

    // const projects = useAppSelector(selectProjects);
    const projects = [{
        name: "Project1"
    },
        {
            name: "Project1"
        }, {
            name: "Project1"
        }, {
            name: "Project1"
        }, {
            name: "Project1"
        }, {
            name: "Project1"
        }]


    return (

        <div className="footer">
            <div className="footer-main">
                <div className="footer-column">
                    <h3 className="footer-heading"> Heading One</h3>
                    <li className="footer-link">Tel {666666}</li>
                    <li className="footer-link">Fax {33333}</li>
                    <li className="footer-link">Lab: {555}</li>
                    <li className="footer-link">contact</li>
                    <li className="footer-link">title</li>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading"> {TEXT.PAGE_TITLES.NAVIGATE}</h3>
                    {NAV.map(({TITLE, REF}) => {
                        return (
                            <li className="footer-link" key={REF}>
                                <GenericLink name={TITLE} to={REF}/>
                            </li>
                        )
                    })}
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading"> {TEXT.PAGE_TITLES.PROJECTS}</h3>
                    {projects.map((project, i) => {
                        return (
                            <li className="footer-link" key={i}>
                                <GenericLink
                                    name={project.name}
                                    to={`${ROUTES.PROJECT.BASE}/${project.name}`}
                                />
                            </li>
                        )
                    })}


                </div>


            </div>

        </div>

    )
}


export default Footer;
