import React from 'react';
import {TEXT, NAV, ROUTES} from '@statics';
import GenericLink from '@components/generics/Link';
import './Footer.css'

const Footer = () => {
    const projects = [{
        name: "Correlation"
    },
        {
            name: "Nova"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "IDEO"
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        }]

    return (

        <div className="container">
        <div className="footer">
            <div className="footer-main">
                <div className="footer-left">
            <img src="images/ubc_logo.jpg" className="ubc-logo"/>

                <div className="footer-column-lab-info">
                    <li className="footer-link"><b>Tel</b> {TEXT.LAB_INFO.TEL}</li>
                    <li className="footer-link"><b>Fax</b> {TEXT.LAB_INFO.FAX}</li>
                    <li className="footer-link"><b>Lab:</b> {TEXT.LAB_INFO.EMAIL}</li>
                    <li className="footer-link"><b>Dr. Rensink:</b> {TEXT.LAB_INFO.DRRENSINK_CONTACT}</li>
                </div>
                </div>
                <div className="footer-right">
                <div className="footer-column-navigate">
                    <h3 className="footer-heading"> {TEXT.PAGE_TITLES.NAVIGATE}</h3>
                    {NAV.map(({TITLE, REF}) => {
                        return (
                            <li className="footer-link" key={REF}>
                                <GenericLink name={TITLE} to={REF}/>
                            </li>
                        )
                    })}
                </div>
                <div className="footer-column-projects">
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
            <div className="horizontalLine"></div>
            <li className="campus-text"><b>UBC Visual Cognition Lab</b> {TEXT.LAB_INFO.CAMPUS}</li>
        </div>
        </div>

    )
}

export default Footer;
