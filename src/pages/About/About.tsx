import Grid from '@mui/material/Grid';
import React from 'react';
import './About.css';
import { TEXT } from '@statics';
import kennyMap from '@statics/images/kenny-map.png';
import Card from '@components/Card';
import Footer from '@components/Footer';
import MissionStatement from '@components/LabGoalsFooter';

interface AboutProps {}

const About: React.FC<AboutProps> = props => {
	return (
		<div className="About">
			<div className="header">
				<h1>ABOUT</h1>
				<p className='sub-header'>Browse research details and team resources here</p>
			</div>
			<div className="main-body">
				<section>
					<h2>Our Lab</h2>
					<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
					<div className="mission-img-container">
        				<div className="mission-img-placeholder-one"></div>
        				<div className="mission-img-placeholder-two"></div>
      				</div>
					<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P2}</p>
				</section>
				<section>
					<h2>{TEXT.ABOUT_PAGE.MAIN.PHILOSOPHY.HEADER}</h2>
					<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
					<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				</section>
				<section>
					<h2>{TEXT.ABOUT_PAGE.MAIN.RESPONSIBILITIES.HEADER}</h2>
					<ul className="responsibility-list">
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					</ul>
					<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				</section>
				<section>
					<h2>{TEXT.ABOUT_PAGE.MAIN.VALUES.HEADER}</h2>
					<ul className="value-list">
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
						<li>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
				</ul>
				</section>
			</div>
			<section className="gain-section">
				<h2>What can you gain?</h2>
				<div className="card-container">
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.DESCRIPTION} backgroundColor='#E0F0FF'/>
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.DESCRIPTION} backgroundColor='#E0FDFF'/>
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.DESCRIPTION} backgroundColor='#E0E9FF'/>
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.DESCRIPTION} backgroundColor='#D9F6FF'/>
      			</div>
			</section>
			<div className="contact">
				<div className='map-container'>
					<img src={kennyMap} alt="map" />
				</div>
				<div className="contact-info">
					<h2>Contact Us</h2>
					<p>We are located in the Department of Psychology at the University of British Columbia</p>
					<p><strong>Address</strong><br></br>
					{TEXT.LAB_INFO.ADDRESS}</p>
					<p><strong>Tel</strong> {TEXT.LAB_INFO.TEL}<br></br>
					<strong>Fax</strong> {TEXT.LAB_INFO.FAX}</p>
					<p><strong>Contact</strong></p>
					<ul>
						<li><strong>Lab:</strong> {TEXT.LAB_INFO.EMAIL}</li>
						<li><strong>Dr. Rensink:</strong> {TEXT.LAB_INFO.DRRENSINK_CONTACT}</li>
						<li><strong>Daniel (Admin):</strong></li>
						<li><strong>Sara (Admin):</strong></li>
						<li><strong>Sogol (Admin):</strong></li>
					</ul>
					<p><strong>Hours</strong><br></br>
					Weekdays: 9AM-5PM<br></br>
					Weekends: Closed</p>		
				</div>
			</div>
			<MissionStatement />
		</div>
	);
};

export default About;
