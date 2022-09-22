import React from 'react';
import { TEXT, NAV, ROUTES } from '@statics';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link';
import './Footer.css';

const Footer = () => {

	const projects = useAppSelector(selectProjects);

	return (
		<div className="footer">
			{/* TODO: insert UBC logo */}
			{/* lab information */}
			<div className="info">
				<li>Tel {TEXT.LAB_INFO.TEL}</li>
				<li>Fax {TEXT.LAB_INFO.FAX}</li>
				<li>Lab {TEXT.LAB_INFO.EMAIL}</li>
				<li>Dr. Rensink {TEXT.LAB_INFO.DRRENSINK_CONTACT}</li>
				<li>{TEXT.COMMON.TITLE} {TEXT.LAB_INFO.CAMPUS}</li>
			</div>

			{/* navigation links */}
			<div className="nav">
				{TEXT.PAGE_TITLES.NAVIGATE} 
				{NAV.map(({ TITLE, REF }) => {
					return (
						<li key={REF}>
							<GenericLink name={TITLE} to={REF}/>
						</li>
					);
				})}
			</div>

			{/* project links */}
			<div className="project">
				{TEXT.PAGE_TITLES.PROJECTS} 
				{projects.map((project, i) => {
					return (
						<li key={i}>
							<GenericLink 
								name={project.name}
								to={`${ROUTES.PROJECT.BASE}/${project.name}`}
							/>
						</li>
					); 
				})}
			</div>
		</div>

	);       
};
        

export default Footer;
