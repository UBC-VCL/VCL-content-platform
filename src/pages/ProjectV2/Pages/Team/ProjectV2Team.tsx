import React from "react";
import { Project } from "@entities/Project";
import { MdAccountCircle } from "react-icons/md";
import "./ProjectTeam.css";
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

const ProjectV2Team: React.FC<ProjectProps> = (props) => {
	return (
		<>
			<div className="team-header">
				<p>Team Members</p>
			</div>
			<div>
				{props.project.members ? (
					props.project.members.map((member) => (
						<>
							<div className="icon-container">
								<MdAccountCircle size={125} />
							</div>
							<div className="info-container">
								<div className="name">
									<h2>{member.name}</h2>
								</div>
								<div className="position">
									<h3>{member.position}</h3>
								</div>
								<div className="message">
									{member.description ? member.description : ""}
								</div>
							</div>
						</>
					))
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default ProjectV2Team;
