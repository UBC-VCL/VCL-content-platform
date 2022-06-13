import React from 'react';
import { TEXT, NAV, ROUTES } from '@statics';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import { GenericLink } from '@entities/GenericLink';
import FooterLinkGroup from './FooterLinkGroup';
import './Footer.css'

const Footer = () => {

    const projects = useAppSelector(selectProjects);
    
    const navigationLinks: GenericLink[] = NAV.map(({ TITLE, REF}) => {
        return {name: TITLE, to: REF};
    })

    const projectLinks: GenericLink[] = projects.map((project) => {
        return {name: project.name, to: `${ROUTES.PROJECT.BASE}/${project.name}`}
    })

    return (
            <div className="footer-wrapper">
                {/* TODO: insert UBC logo */}
                {/* lab information */}
                <div className="footer"> 
                    <div className="info">
                        <li>Tel {TEXT.LAB_INFO.TEL}</li>
                        <li>Fax {TEXT.LAB_INFO.FAX}</li>
                        <li>Lab {TEXT.LAB_INFO.EMAIL}</li>
                        <li>Dr. Rensink {TEXT.LAB_INFO.DRRENSINK_CONTACT}</li>
                        <li>{TEXT.COMMON.TITLE} {TEXT.LAB_INFO.CAMPUS}</li>
                    </div>

                    <div className="footer-links"> 
                        {/* navigation links */}
                        <div className="nav">
                            {TEXT.PAGE_TITLES.NAVIGATE} 
                            <FooterLinkGroup links={navigationLinks} />
                        </div>

                        {/* project links */}
                        <div className="project">
                            {TEXT.PAGE_TITLES.PROJECTS} 
                            <FooterLinkGroup links={projectLinks} />
                        </div>
                    </div>
                </div>
            </div>

           )       
}
        

export default Footer;
