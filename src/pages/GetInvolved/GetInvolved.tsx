import React from 'react';
import './GetInvolved.css';
import { TEXT } from '@statics';
import LabGoalsFooter from '@components/LabGoalsFooter';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useRef } from 'react'
import GetInvolvedSidebar from '@components/GetInvolvedSidebar';
import { useState } from 'react'
import sidebarIcon from '@statics/images/involved-sidebar-icon.png';


interface GetInvolvedProps { }

const GetInvolved: React.FC<GetInvolvedProps> = props => {

	const [sidebarState, setbarState] = useState<boolean>(true)

	const pRef = useRef<HTMLElement>(null)
	const labMemberRef = useRef<HTMLElement>(null)
	const coPilotRef = useRef<HTMLElement>(null)
	const dsCoPilotRef = useRef<HTMLElement>(null)
	const volunteerRef = useRef<HTMLElement>(null)
	const directedStudiesRef = useRef<HTMLElement>(null)
	const raRef = useRef<HTMLElement>(null)
	const tsRef = useRef<HTMLElement>(null)
	const labManagerRef = useRef<HTMLDivElement>(null)

	const customAutoScroll = (refOBJ: React.RefObject<HTMLElement>) => {
		const navHeight = document.getElementById('nav')!.clientHeight
		const targetPosition = refOBJ.current!.offsetTop - navHeight

		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth',
		})
	}

	return (
		<div className="Join">
			<GetInvolvedSidebar pRef={pRef}
				labMemberRef={labMemberRef}
				coPilotRef={coPilotRef}
				dsCoPilotRef={dsCoPilotRef}
				volunteerRef={volunteerRef}
				directedStudiesRef={directedStudiesRef}
				raRef={raRef}
				tsRef={tsRef}
				labManagerRef={labManagerRef}
				customAutoScroll={customAutoScroll}
				sidebarState={sidebarState}
				setbarState={setbarState}
			/>
			<div id='info-encapsulate'>
			{!sidebarState ?
					<div id="info-icon"><img src={sidebarIcon} alt="Sidebar Icon" width="20" height="20" onClick={() => setbarState(!sidebarState)} /></div> : <div></ div>
				}
				<div id='getInvolvedInfo'>
					<div className="join-header">
						<h1>GET INVOLVED</h1>
						<p className='join-sub-header'>Interested in what we do? Find out how you can join our activities here.</p>
					</div>
					<div className="join-main-body">
						<div className='role-divider' />
						<section ref={pRef}>
							<h2>Get Involved as a Participant</h2>
							<p>
								Sign up for any experiment being conducted at the Visual Cognition Lab through the VCL Subject Sign-up System.
								<br></br>
								Sign up for experiments at: <Link to="//www.reservax.com/ubcviscog/" style={{ color: "#5387a5" }} target="_blank" rel="noreferrer">www.reservax.com/ubcviscog/</Link>
							</p>
						</section>
						<section ref={labMemberRef}>
							<h2>Get Involved as a Lab Member</h2>
							<p>
								People hold different roles within the Visual Cognition Lab, but every* member begins as a research "Co-Pilot." From the Co-Pilot position, members may branch out as they wish
								or remain in Co-Pilot status. To read more about the Co-Pilot
								role/application and discover what the other lab positions hold, browse the navigation bar on the left or click one of the following links:
							</p>
							<br></br>
							<ul style={{ color: "#5387a5" }}>
								<li>
									<a href="#co-pilot"
										style={{ color: "#5387a5" }}
									>
										Co-Pilot
									</a>
								</li>
								<li>
									<a
										href="#data-science"
										style={{ color: "#5387a5" }}
									>
										Data Science Co-Pilot
									</a>
								</li>
								<li>
									<a
										href="volunteer"
										style={{ color: "#5387a5" }}
									>
										Volunteer
									</a>
								</li>
								<li>
									<a
										href="directed-studies"
										style={{ color: "#5387a5" }}
									>
										Directed Studies
									</a>
								</li>
								<li>
									<a
										href="research-assistant"
										style={{ color: "#5387a5" }}
									>
										Research Assistant
									</a>
								</li>
								<li>
									<Link
										to="//viscoglab.psych.ubc.ca/tech-support/"
										style={{ color: "#5387a5" }}
										target="_blank"
										rel="noreferrer"
									>
										Tech Support
									</Link>
								</li>
								<li>
									<Link
										to="//viscoglab.psych.ubc.ca/get-involved/lab-manager/"
										style={{ color: "#5387a5" }}
										target="_blank"
										rel="noreferrer"
									>
										Lab Manager
									</Link>
								</li>
							</ul>
							<br></br>
							<p>
								*Exceptions can be made for prospective Directed Studies students
							</p>
							<br></br>
							<p>
								Note that if you were previously a lab member but have been away for at least a term, you will need to go through the application process again.
							</p>
						</section>
						<div className='role-divider' />
						<section id="co-pilot" ref={coPilotRef}>
							<h2>Get Involved as a Co-Pilot...</h2>
							<p>To be a co-pilot, you don't need to have any background in research and you can help out whenever you want. Co-Pilots sign a contract with the lab
								that lasts for a school term, with the possibility for renewal. Co-Pilots are assigned to a particular project team based on their interests, but have
								the freedom to explore different projects. If you would like to join one of the project teams (listed here), make this known during your initial
								interview. If the Co-Pilot position sparks your insterest, please see the "Application Steps" section below.
							</p>
							<br></br>
							<p>Co-Pilot research activities include...</p>
							<ul>
								<li>Shadowing/observing the various elements of lab work (experiment running, data entry, analysis, etc.)</li>
								<li>Attending our lab meetings/project meetings</li>
								<li>Running experiments</li>
								<li>Analyzing data</li>
								<li>Debriefing participants</li>
								<li>Reviewing literature</li>
								<li>Making classroom announcements</li>
								<li>Helping us out get more "media" into our website (pictures, videos... you can participate either by filming/taking photos or starring in one!)</li>
								<li>...And more!</li>
							</ul>
							<br></br>
							<p style={{ color: "#5387a5" }}>
								<Link
									to="//viscoglab.psych.ubc.ca/get-involved/vcl-co-pilots/"
									style={{ color: "#5387a5" }}
									target="_blank"
								>
									See Application Instructions Here
								</Link>
							</p>
							<p>
								Note: We are currently not looking for additional co-pilots, with the exception of the Data Science Co-Pilot position. If you are insterested in
								joining the lab with a different project, please apply near the start of 2021W Term 2.
							</p>
						</section>
						<div className='role-divider' />
						<section id="data-science" ref={dsCoPilotRef}>
							<h2>Get Involved as a Data Science Co-Pilot...</h2>
							<p>
								We are looking for a Co-pilot with a strong Data Science or Statistics background to join the percepttual Modes (SHIVA) project. The successful applicant
								does not need to have extensive prior experience in research projects, but should be able to demonstrate expertise in data science tasks. Other
								responsibilities includes:
							</p>
							<br></br>
							<ul>
								<li>Attending project meetings/lab meetings</li>
								<li>Running experiments</li>
								<li>Analyzing data</li>
								<li>Reviewing literature</li>
							</ul>
							<br></br>
							<p style={{ color: "#5387a5" }}>
								<Link
									to="//viscoglab.psych.ubc.ca/get-involved/data-science-co-pilot/"
									style={{ color: "#5387a5" }}
									target="_blank"
									rel="noreferrer"
								>
									See Application Intructions Here
								</Link>
							</p>
						</section>
						<div className='role-divider' />
						<section id="volunteer" ref={volunteerRef}>
							<h2>Get Involved as a Volunteer...</h2>
							<p>
								Volunteers take priority over Co-Pilots in being trained in research activities and must dedicate a minimum of
								<b>9 hours per week</b> to the lab. Volunteers must have signed a Volunteer Contract and submitted a letter of intent.
							</p>
							<br></br>
							<p>
								Volunteers are members who have been Co-Pilots or Directed Studies students for a period of time and have then
								autonomous, take more initiative, and commit more time to the lab than Co-Pilots. The contract lasts a minimum of 1 school
								term (3 months duing the winter session/2 months duing the summer session) and a maximum of 2 school terms. After that, a
								Volunteer can either renew the contract or go on to become an RA or Project Leader with recommendations from other lab members.
							</p>
							<br></br>
							<p>
								A colunteer will be able to do everthing that a Co-Pilot can do, but will have priority in receiving training in research activities
								because thehy are committing to their project leader a set amount of hours. A Volunteer must commit at leaast 9 hours a week to
								agreed upon lab duties. A commitment of 9 hours a week is approximately the minimum amount of time needed to gain the skills that a
								research lab would expect from a seasoned volunteer.
							</p>
							<p style={{ color: "#5387a5" }}>
								<Link to="//viscoglab.psych.ubc.ca/get-involved/volunteeringdirected-studies/"
									style={{ color: "#5387a5" }}
									target="_blank"
									rel="noreferrer"
								>
									See Application Intructions Here
								</Link>
							</p>
						</section>
						<div className='role-divider' />
						<section id="directed-studies" ref={directedStudiesRef}>
							<h2>Get Involved as a Directed Studies/COGS 402 Student...</h2>
							<p>
								Directed Studies take priority over Co-Pilots in being trained in research activities and must dedicate a minimum of <b>9 hours per week</b> to the lab.
								It is a good idea to apply for a Directed Studies position early - at least a term before the start of the course.
							</p>
							<br></br>
							<p>
								A Directed Studies student will have the minimum rights that a Volunteer does, but will have priority in using lab resources (participants, computers,
								statistical analysis advising, etc.) for research activities because they will have deadlline for submitting a final product to their course supervisor.
								A Directed Studies student must commit at least 9 hours a week to agreed upon lab duties.
							</p>
							<br></br>
							<p>
								For Directed Studies Students...
							</p>
							<p>
								We typically have <b>THREE</b> meetings:
							</p>
							<ol>
								<li>Beginning of the term, to go over the grading criteria in detail. The title says COGS402 but we apply these rough guidelines for other courses as well.</li>
								<li>Midpoint meeting, to cehck up on your progress. If things aren't going as planned, we still have time to change course so you have a decent amount of
									material to cover on your term paper.</li>
								<li>Reviewing literature</li>
								<li>End of the term, for you to make your case on what grade you deserve (as awkward as this sounds!) This is so that we can capture the truth, and write down
									evidence when we send in the evaluation over to the instructor.</li>
							</ol>
							<br></br>
							<p>
								For COGS 402 Students...
								<br></br>
								Take a look at our COGS402 FAQ page!
							</p>
							<br></br>
							<p style={{ color: "#5387a5" }}>
								<Link to="//viscoglab.psych.ubc.ca/get-involved/directed-studies/"
									style={{ color: "#5387a5" }}
									target="_blank"
									rel="noreferrer"
								>
									See Application Intructions Here
								</Link>
							</p>
							<p>
								Please keep in mind that we typically prefer Directed Studies students to begin with a co-pilot position with our lab. However, exceptions can be made.
							</p>

						</section>
						<div className='role-divider' />
						<section id="research-assistant" ref={raRef}>
							<h2>Get Involved as a Research Assistant...</h2>
							<p>
								Volunteers take priority over Co-Pilots in being trained in research activities ad must dedicate a minimum of
								<b>9 hours per week</b> to the lab. Volunteers must have signed a Volunteer Contract and submitted a letter of intent.
							</p>
							<br></br>
							<p>
								Volunteers are members who have been Co-Pilots or Directed Studies for a period of time and have then signed a Volunteer
								Contract making specific commitments to the lab. Volunteers are expected to be more autonomous, take more initiative,
								and commit more time to the lab than Co-Pilots. The contract lasts a minimum of 1 school term (3 months during the winter
								session/2 months during the summer session) and a maximum of 2 school terms. After that, a Volunteer can either renew the
								contract or go on to become an RA or Project Leader with recommendations from other lab memebers.
							</p>
							<br></br>
							<p>
								A volunteer will be able to do everything that a Co-Pilot can do, but will have priority in receiving training in research
								activities because they are commiting to their project leader a set amount of hours. A Volunteer must commit at least 9
								hours a week to agreed upon lab duties. A commitment of 9 hours a week is approcimately the minimum amount of time needed
								to gain the skills that a research lab would expect from a seasoned volunteer.
							</p>
							<p style={{ color: "#5387a5" }}>
								<Link
									to="//viscoglab.psych.ubc.ca/get-involved/student-awards/"
									style={{ color: "#5387a5" }}
									target="_blank"
									rel="noreferrer"
								>
									See Application Instructions Here
								</Link>
							</p>
						</section>
					</div>
					<LabGoalsFooter />
				</div>
			</div>

		</div>
	);
};

export default GetInvolved;
