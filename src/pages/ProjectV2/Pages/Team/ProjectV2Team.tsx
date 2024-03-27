import React from "react";
import { Project } from "@entities/Project";
import { MdAccountCircle } from "react-icons/md";
// import "./ProjectTeam.css";
import "./ProjectTeamMobile.css";
import "../../Project.css";

interface ProjectProps {
	project: Project;
}

interface Member {
	name: string;
	position: string;
	education: string;
	description?: string;
	email?: string;
	phone?: string;
	linkedIn?: string;
	isCurrentMember?: boolean;
}

const members = [
	{
		name: "Janie Jones",
		position: "Technical Lead",
		description: "Hi I'm Janie. I'm a first year, excited to be in VCL!",
	},
	{
		name: "Bridget Williams",
		position: "Project Manager",
		description:
			"Hi I'm Bob. I'm a first year, excited to be in VCL! Again, hi I'm Bob. I'm a first year, excited to be in VCL! Again again, hi I'm Bob. I'm a first year, excited to be in VCL! Hi I'm Bob. I'm a first year, excited to be in VCL!",
	},
	{
		name: "Joe Smith",
		position: "Co-Pilot",
		description: "Hi I'm Joe. I'm a first year, excited to be in VCL!",
	},
];

const ProjectV2Team = () => {
	return (
		<div className="team-container">
			<div className="team-header">
				<p>Team Members</p>
				<hr />
			</div>
			{members.map((member) => (
				<div className="team-member">
					<div className="member-flex-wrapper">
						<div className="member-photo-container">
							<img src="image.png"></img>
						</div>
						<div>
							<h3 className="member-name">{member.name}</h3>
							<p>
								<br />
								<span className="member-role">{member.position}</span>
								<br />
								<br />
								{member.description ? member.description : ""}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectV2Team;
