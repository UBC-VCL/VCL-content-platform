import Grid from '@mui/material/Grid';
import React from 'react';
import './About.css';
import { TEXT } from '@statics';
import kennyMap from '@statics/images/kenny-map.png';
import Card from '@components/Card';
import Footer from '@components/Footer';
import MissionStatement from '@components/MissionStatement';

interface AboutProps {}

const About: React.FC<AboutProps> = props => {
	return (
		<div className="About">
			<div className="header">
				<h1>ABOUT</h1>
			</div>
			<div style={{
				color: '#535353',
				fontWeight: '400',
				fontSize: '17px'
			}}>
				<p>Browse research details and team resources here</p>
			</div>
			<div className="main_body">
				<h2>Our Lab</h2>
				<p style={{marginBottom: '36px'}}>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				<Grid container columnSpacing={{xs: 12, sm: 12, md: 6}} style={{marginLeft: '5px'}}>
						<Grid xs={12} sm={12} md={6}>
							<div className="img_placeholder" style={{marginBottom: '10px', width: '93%'}}>
							</div>
						</Grid>
						<Grid xs={12} sm={12} md={6}>
							<div className="img_placeholder" style={{marginBottom: '10px', width: '93%'}}>
							</div>
						</Grid>
				</Grid>
				<p style={{marginTop: '36px'}}>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P2}</p>
				<h2>{TEXT.ABOUT_PAGE.MAIN.PHILOSOPHY.HEADER}</h2>
				<p style={{marginBottom: '36px'}}>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				<p style={{marginBottom: '36px'}}>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				<h2>{TEXT.ABOUT_PAGE.MAIN.RESPONSIBILITIES.HEADER}</h2>
				<ul style={{marginBottom: '36px'}}>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
				</ul>
				<p style={{marginBottom: '36px'}}>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				<h2>{TEXT.ABOUT_PAGE.MAIN.VALUES.HEADER}</h2>
				<ul style={{marginBottom: '36px'}}>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
					<li style={{marginTop: '15px'}}>{TEXT.ABOUT_PAGE.BP_PLACEHOLDER}</li>
				</ul>
			</div>
			<div className="gain_section">
				<h2>What can you gain?</h2>
				<div className="card-container">
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.DESCRIPTION} backgroundColor='#E0F0FF'/>
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.DESCRIPTION} backgroundColor='#E0FDFF'/>
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.DESCRIPTION} backgroundColor='#E0E9FF'/>
        			<Card title={TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.HEADER} desc={TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.DESCRIPTION} backgroundColor='#D9F6FF'/>
      			</div>
			</div>
			<div className="contact">
				<Grid container columnSpacing={{xs: 12, md: 6, sm: 12}}>
						<Grid item xs={12} sm={12} md={6}>
							<div className="img_placeholder" style={{backgroundImage: `url(${kennyMap})`, marginTop: '20px'}}>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<div>
								<h2>Contact Us</h2>
								<p>We are located in the Department of Psychology at the University of British Columbia</p>
								<Grid container columnSpacing={{xs: 6}} justifyContent="center">
									<Grid item xs={6}>
										<div>
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
										</div>
									</Grid>
									<Grid item xs={6}>
										<div>
											<p><strong>Hours</strong><br></br>
											Weekdays: 9AM-5PM<br></br>
											Weekends: Closed</p>
										</div>
									</Grid>										
								</Grid>
							</div>
						</Grid>
				</Grid>
			</div>
			<MissionStatement />
		</div>
	);
};

export default About;
