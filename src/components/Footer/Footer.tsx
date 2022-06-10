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
            name: "Project2"
        }, {
            name: "Project3"
        }, {
            name: "Project4"
        }, {
            name: "Project5"
        }]


    return (

        <div className="footer">
            <div className="ubc-logo">
            <img src="images/ubc_logo.jpg"/>
            </div>
            <div className="footer-main">
                <div className="footer-column">
                    <li className="footer-link"><b>Tel</b> {TEXT.LAB_INFO.TEL}</li>
                    <li className="footer-link"><b>Fax</b> {TEXT.LAB_INFO.FAX}</li>
                    <li className="footer-link"><b>Lab:</b> {TEXT.LAB_INFO.EMAIL}</li>
                    <li className="footer-link"><b>Dr. Rensink:</b> {TEXT.LAB_INFO.DRRENSINK_CONTACT}</li>
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
            <div className="horizontalLine"></div>
            <li className="campus-text"><b>UBC Visual Cognition Lab</b> {TEXT.LAB_INFO.CAMPUS}</li>
        </div>

    )
}


export default Footer;
