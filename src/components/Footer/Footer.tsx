import React from 'react';
import {TEXT, NAV, ROUTES} from '@statics';
import GenericLink from '@components/generics/Link';
import './Footer.css'
import constants from "@statics/constants";

const Footer = () => {
    const projects = [{
        name: "Correlation"
    },
        {
            name: "NOVA"
        }, {
            name: "SHIVA"
        }, {
            name: "Ideo"
        }, {
            name: "Image Transitions"
        }, {
            name: "NCIS"
        }]

    return (

        <div className="footer-container">
            <div className="footer">
                <div className="footer-main">

                    <div className="footer-left">
                        <div className="footer-image-container">
                            <img src={constants.UBC_LOGO_URL} className="ubc-logo" alt={'UBC logo'}/>
                        </div>
                        <div className="footer-column-lab-info">
                            <li className="footer-contact-item"><b>{TEXT.LAB_INFO.TEL_TEXT + ':'}</b> {TEXT.LAB_INFO.TEL}</li>
                            <li className="footer-contact-item"><b>{TEXT.LAB_INFO.FAX_TEXT + ':'}</b> {TEXT.LAB_INFO.FAX}</li>
                            <li className="footer-contact-item"><b>{TEXT.LAB_INFO.LAB_TEXT + ':'}</b> {TEXT.LAB_INFO.EMAIL}</li>
                            <li className="footer-contact-item"><b>{TEXT.LAB_INFO.DR_RENSINK + ':'}</b> {TEXT.LAB_INFO.DRRENSINK_CONTACT}</li>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-column-navigate">
                            <h3 className="footer-heading"> {TEXT.PAGE_TITLES.NAVIGATE}</h3>
                            {NAV.map(({TITLE, REF}) => {
                                // return (
                                //     <li className="footer-project-list" key={REF}>
                                //         <GenericLink name={TITLE} to={REF}/>
                                //     </li>
                                // )
                                console.log(NAV)
                            })}
                        </div>
                        <div className="footer-column-projects">
                            <h3 className="footer-heading"> {TEXT.PAGE_TITLES.PROJECTS}</h3>
                            {projects.map((project, i) => {
                                return (
                                    <li className="footer-project-list" key={i}>
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