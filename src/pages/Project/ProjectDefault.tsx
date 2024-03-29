import React, { useEffect, useState } from "react";
import { Project } from "@entities/Project";
import { TEXT } from "@statics";
import "./ProjectDefault.css";
import "./Project.css";
import ProjectBreadcrumbs from "@components/ProjectBreadcrumbs";
import TitleCard from "@components/TitleCard/TitleCard";
import ProjectDescription from "@components/ProjectDescription";
import VerticalSpacer from "@components/VerticalSpacer/VerticalSpacer";
import COLORS from "@statics/colors";
import TopLeftCog from "@statics/images/ProjectDescriptionPage/TopLeftCog.png";
import BottomRightCog from "@statics/images/ProjectDescriptionPage/BottomRightCog.png";
import GalleryCog from "@statics/images/ProjectDescriptionPage/GalleryCog.png";
import ProjectGallery from "@components/ProjectGallery";
import { SlideShowOBJ } from "./types";
import img1 from "@statics/images/correlation/correlation1.png";
import img3 from "@statics/images/correlation/correlation3.png";
import img4 from "@statics/images/correlation/correlation4.png";
import dotenv from "dotenv";

dotenv.config();
const IS_WIP = process.env.REACT_APP_WIP === "development";

interface ProjectProps {
	project: Project;
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
	console.log(props.project);

	const dummyList: SlideShowOBJ[] = [
		{
			img: img3,
			title: "Figure 1.3",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			cardType: "default",
		},
		{
			img: img4,
			title: "Figure 1.4",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			cardType: "default",
		},
		{
			img: img1,
			title: "Figure 1.5",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			cardType: "default",
		},
	];

	const fillerDescrip = [
		"The Correlation project studies the visual perception of correlation in data visualizations. A data visualization is a graphical representation of a data set. For instance, scatter plots are a common choice of visualization for data with two variables. In a scatter plot, data is translated into a graphic form by placing points on a cartesian (x-y) coordinate plane according to their values on each variable.",
		"Correlation in a scatter-plot corresponds to the degree to which the points form a straight line. Scatter plots represent the variability in a data set with a single visual variable, position, but there are others (ie: size, color, texture, and brightness) which could be used instead. For example, consider the two ring strip-plots below. They represent the same data-set as the scatter plots above, but they use ring-size rather than y-position to represent variability in one of the variables.",
		"Although scatter plots are far more common, there’s no evidence of them being more effective than ring strip-plots, or any other possible alternatives.",
	];

	const [error, setError] = useState<boolean>(false);

	const { project } = props;

	return (
		<div className="main">
			<div className="description-container">
				<div className="top-cog-container">
					<img
						src={TopLeftCog}
						className="top-left-cog"
						alt="a design elemnt depicting a set of cogs"
					/>
				</div>
				<div className="bottom-cog-container">
					<img
						src={BottomRightCog}
						className="bottom-right-cog"
						alt="a design elemnt depicting a set of cogs"
					/>
				</div>

				<ProjectBreadcrumbs
					project_name={props.project.name}
					page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION}
				/>

				<TitleCard number="01" title={props.project.name} textColor="white" />

				<ProjectDescription
					paragraphOne={
						project.description ? project.description.first : fillerDescrip[0]
					}
					paragraphTwo={
						project.description ? project.description.second : fillerDescrip[1]
					}
					emphasizedStatement={
						project.description ? project.description.emp : fillerDescrip[2]
					}
				/>
			</div>
			<img
				src={GalleryCog}
				className="gallery-cog"
				alt="a design elemnt depicting a set of cogs"
			/>
			{props.project.name !== "NCIS" &&
				props.project.name !== "Coding Team" && (
					<>
						<ProjectGallery
							displayNumber={2}
							compTitle={"Gallery"}
							itemArray={project.galleryList ? project.galleryList : dummyList}
						/>

						<VerticalSpacer height={20} />

						<div className="qa-container">
							<TitleCard number="03" title="Q&A" textColor="mediumBlue" />

							{project.qa ? (
								project.qa.map((item) => {
									return (
										<>
											<VerticalSpacer height={10} />
											<h3 style={{ color: COLORS.darkBlue }}>{item.q}</h3>
											<p style={{ color: COLORS.darkBlue }}>{item.a}</p>
										</>
									);
								})
							) : (
								<>
									<VerticalSpacer height={20} />

									<h3 style={{ color: COLORS.darkBlue }}>
										What methods are used to derive the measures?
									</h3>
									<p style={{ color: COLORS.darkBlue }}>
										We use two classic methods from psychophysics to derive our
										measures – discrimination tasks using the staircase method
										to measure precision, and a magnitude estimation task to
										measure accuracy. Performance in both respects is regular
										and well described by Weber and Fechner laws – a linear
										relationship for discrimination and a logarithmic curve for
										estimation – regardless of which visual variables are chosen
										to represent the data.
									</p>

									<VerticalSpacer height={20} />

									<h3 style={{ color: COLORS.darkBlue }}>
										What are we currently studying?
									</h3>
									<p style={{ color: COLORS.darkBlue }}>
										Our working theory for these results is based on
										participants using the information entropy of the
										visualization to make their judgements. Currently we’re
										studying how different gamma levels impact the perception of
										correlation in black and white luminance strip plots, and
										evaluating the effects of mixed populations in scatter
										plots.
									</p>
								</>
							)}
						</div>
					</>
				)}
		</div>
	);
};

export default ProjectDefault;
