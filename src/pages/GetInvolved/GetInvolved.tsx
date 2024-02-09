import React from 'react';
import './GetInvolved.css';
import { TEXT, ROUTES } from '@statics';
import LabGoalsFooter from '@components/LabGoalsFooter';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useRef } from 'react'
import GetInvolvedSidebar from '@components/GetInvolvedSidebar';
import { useState, useEffect } from 'react'
import menuIcon from '@statics/images/menu-icon.png';



interface GetInvolvedProps { }

const GetInvolved: React.FC<GetInvolvedProps> = props => {

	const [sidebarState, setbarState] = useState<boolean>(true)
	const [menuSize, setMenuSize] = useState<number>(132);

	const pRef = useRef<HTMLElement>(null)
	const labMemberRef = useRef<HTMLElement>(null)
	const coPilotRef = useRef<HTMLElement>(null)
	const dsCoPilotRef = useRef<HTMLElement>(null)
	const volunteerRef = useRef<HTMLElement>(null)
	const directedStudiesRef = useRef<HTMLElement>(null)
	const raRef = useRef<HTMLElement>(null)
	const ctRef = useRef<HTMLElement>(null)

	const customAutoScroll = (refOBJ: React.RefObject<HTMLElement>) => {
		const navHeight = document.getElementById('nav')!.clientHeight
		const targetPosition = refOBJ.current!.offsetTop - navHeight

		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth',
		})
	}

	function handleResize() {
		if (window.innerWidth <= 700) {
			// mobile navbar
			setMenuSize(
				132
			)
		} else {
			// global-nav-bar
			setMenuSize(
				83.5
			)
		}
	}

	useEffect(() => {
		// Set up the event listener
        setMenuSize(document.getElementById("nav")!.offsetHeight)
		window.addEventListener('resize', handleResize);
		console.log(menuSize)

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // Empty dependency array ensures the effect runs only on mount and unmount


	function applicationInstructions(position: string) {
		return <details className="app-instructions">
			<summary className="instruct-summary"> See Application Instructions Here </summary>
			<ol className="app-steps">
				<li>Take a look at our <a href={ROUTES.HOME} target="_blank" className="instruction-link"><strong>Orientation page</strong></a> to see if our lab philosophy matches yours and to get a rough idea on how our lab operates.</li>
				<li>Browse through <a href={ROUTES.PROJECT.BASE} target="_blank" className="instruction-link"><strong>our projects</strong></a> and see if there are any projects you’d like to be a part of.</li>
				<li>Send an e-mail to vclmanager@gmail.com with <em>{position}</em> in the subject line, and make sure to include the following information:</li>
				<ul>
					<li>Your resume/CV</li>
					<li>A list of related courses you have taken so far</li>
					<li>The research projects you’re interested in and why you’re interested in them</li>
				</ul>
			</ol>
		</details>
	}

	return (
		<div className="Join" style={{marginTop:`${menuSize}px`}}>
			<GetInvolvedSidebar
				pRef={pRef}
				labMemberRef={labMemberRef}
				coPilotRef={coPilotRef}
				dsCoPilotRef={dsCoPilotRef}
				volunteerRef={volunteerRef}
				directedStudiesRef={directedStudiesRef}
				raRef={raRef}
				ctRef={ctRef}
				customAutoScroll={customAutoScroll}
				sidebarState={sidebarState}
				setbarState={setbarState}
			/>
			<div id="get-involved-page-table-menu" style={{paddingTop:"1rem"}}>
				<ul>
					<li onClick={() => customAutoScroll(pRef)}>As a Participant</li>
					<li onClick={() => customAutoScroll(labMemberRef)}>As a Lab Member</li>
					<li id="co-pilot" className='clickableOption'><a onClick={() => customAutoScroll(coPilotRef)}>Co-Pilot</a></li>
					<li id="dscico-pilot" className='clickableOption'><a onClick={() => customAutoScroll(dsCoPilotRef)}>Data Science Co-Pilot</a></li>
					<li id="volunteer" className='clickableOption'><a onClick={() => customAutoScroll(volunteerRef)}>Volunteer</a></li>
					<li id="directed-studies" className='clickableOption'><a onClick={() => customAutoScroll(directedStudiesRef)}>Directed Studies</a></li>
					<li id="research-assistant" className='clickableOption'><a onClick={() => customAutoScroll(raRef)}>Research Assistant</a></li>
					<li id="coding-team" className='clickableOption'><a onClick={() => customAutoScroll(ctRef)}>Coding Team</a></li>
				</ul>
			</div>
			<div id='info-encapsulate'>
				<div id="info-icon"><img src={menuIcon} alt="Sidebar Icon" width="25" height="25" onClick={() => {
					document.getElementById('get-involved-sidebar')!.style.display = 'block'
					document.getElementById('info-icon')!.style.display = 'none'
					setbarState(!sidebarState)
				}} /></div>
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
								<li id="co-pilot" className='clickableOption'><a onClick={() => customAutoScroll(coPilotRef)}>Co-Pilot</a></li>
								<li id="dscico-pilot" className='clickableOption'><a onClick={() => customAutoScroll(dsCoPilotRef)}>Data Science Co-Pilot</a></li>
								<li id="volunteer" className='clickableOption'><a onClick={() => customAutoScroll(volunteerRef)}>Volunteer</a></li>
								<li id="directed-studies" className='clickableOption'><a onClick={() => customAutoScroll(directedStudiesRef)}>Directed Studies</a></li>
								<li id="research-assistant" className='clickableOption'><a onClick={() => customAutoScroll(raRef)}>Research Assistant</a></li>
								<li id="coding-team" className='clickableOption'><a onClick={() => customAutoScroll(ctRef)}>Coding Team</a></li>
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
								{applicationInstructions("VCL Co-Pilots")}
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
								{applicationInstructions("Data Science Co-Pilots")}
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
								A volunteer will be able to do everthing that a Co-Pilot can do, but will have priority in receiving training in research activities
								because thehy are committing to their project leader a set amount of hours. A Volunteer must commit at leaast 9 hours a week to
								agreed upon lab duties. A commitment of 9 hours a week is approximately the minimum amount of time needed to gain the skills that a
								research lab would expect from a seasoned volunteer.
							</p>
							<p style={{ color: "#5387a5" }}>
								<details>
									<summary className="instruct-summary"> Details</summary>
									<p className="app-steps">
										Volunteers are lab members who have been
										<strong><a onClick={() => customAutoScroll(coPilotRef)}> Co-Pilots </a></strong>
										or
										<strong><a onClick={() => customAutoScroll(directedStudiesRef)}> Directed Studies students </a></strong>
										for a period of time and have then signed a Volunteer Contract making specific commitments to the lab.
									</p>
								</details>
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
							<br />
							<p style={{ color: "#5387a5" }}>
								{applicationInstructions("VCL Co-Pilots")}
							</p>
							<p>
								<i>Please keep in mind that we typically prefer Directed Studies students to begin with a co-pilot position with our lab. However, exceptions can be made.</i>
							</p>
							<p style={{ color: "#1C426D", marginTop: "30px" }}>
								<details>
									<summary className="instruct-summary"><strong>COGS 402 FAQ!</strong></summary>
									<ul>
										<li><strong>Q:</strong> When should I apply to the VCL for my 402? </li>
										<li><strong>A:</strong> It is recommended that you apply as a Co-Pilot a term before the start of your 402. That way, you are able to get acquainted with the lab environment and the ongoing research so that you can come up with your own research proposal. </li>
										<br />
										<li><strong>Q:</strong> Who can I contact for more help/information about 402 at the VCL? </li>
										<li><strong>A:</strong> If you would like more information on how the 402 is conducted at the VCL, please email the lab manager at vclmanager@gmail.com. For general 402 inquiries please contact the instructor or program advisor. </li>
										<br />
										<li><strong>Q:</strong> Why is there a course this in the COGS program? / Why is this course required when I’m not planning on going into research? </li>
										<li><strong>A:</strong>COGS 402 is designed to give students exposure to research before they graduate and provide them with the opportunity to learn invaluable skills outside of the classroom. </li>
										<br />
										<li><strong>Q:</strong> Do I have to come up with my own project, or can I join one?</li>
										<li><strong>A:</strong>Students are expected to propose their own extension or focus within an existing project at the VCL or to propose a novel project. </li>
										<br />
										<li><strong>Q:</strong> Is it better to take 402 during the winter session or the summer?</li>
										<li><strong>A:</strong>It’s all about personal preference, and there are advantages/disadvantages to both. However, it good to know that COGS 402 require 9 hours of lab per week so make sure your schedule can accommodate that. </li>

									</ul>

								</details>
							</p>

						</section>
						<div className='role-divider' />
						<section id="research-assistant" ref={raRef}>
							<h2>Get Involved as a Research Assistant...</h2>
							<p>
								Research Assistants (RAs)…
								<ul>
									<li>Are members of the lab officially hired to carry out experiments</li>
									<li>Take priority over Volunteers in using lab resources</li>
									<li>Must dedicate a minimum of 9 hours per week to lab</li>
									<li>Must be elected by senior RAs/Project Leaders and approved by Dr. Rensink</li>
								</ul>
							</p>
							<br></br>
							<p>
								An RA will be able to do everything that a Volunteer can do, but will be paid and will have priority in
								using the lab’s resources. An RA must commit at least 9 hours a week to agreed upon lab duties. Most Project Leaders
								have RA status. Typically, RAs are elected by their Project Leaders but final decisions about who fills these roles must be
								approved by Dr. Rensink.
							</p>
							<p style={{ color: "#5387a5" }}>
								<details>
									<summary className="instruct-summary"> Details</summary>
									<p className="app-steps">After a
										<strong><a onClick={() => customAutoScroll(volunteerRef)}> Volunteer </a></strong>
										has gained significant handle of the project in which they’re involved, they may be eligible to be an RA. An RA will be able to do everything that a Volunteer can do, but will be paid and will have priority in using the lab’s resources. An RA must commit at least 9 hours a week to agreed upon lab duties. Most Project Leaders have RA status. Typically, RAs are elected by their Project Leaders but final decisions about who fills these roles must be approved by Dr. Rensink.</p>
								</details>
							</p>
						</section>

						<div className='role-divider' />
						<section id="coding-team" ref={ctRef}>
							<h2>Get Involved in the Coding Team...</h2>
							<p>
								Coding team members…
								<ul>
									<li>Are volunteers that would like to develop their technical skills</li>
									<li>Can be involved in specific branches of technological maintenance of the lab including (but not limited to)</li>
									<ul>
										<li>Website</li>
										<li>Coding Workshops</li>
										<li>Software</li>
										<li>Data Analysis Measures</li>
									</ul>
								</ul>
							</p>
							<p style={{ color: "#5387a5" }}>
								<details>
									<summary className="instruct-summary">Application Instructions</summary>
									<p className="app-steps">If you are interested in an opportunity where you can develop your tech skills while getting involved in a research setting please send an email to vclmanager@gmail.com with your resume/CV.</p>
								</details>
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
