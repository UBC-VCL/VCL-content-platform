import { ROUTES } from "@/statics";
import Link from "next/link";

const ProjectOverviewCard = ({ project }: any) => {
  const toSneakCase = (str: string) => {
    return str
      .split(" ")
      .map((word: any, i: any) => (!i ? word.toLowerCase() : word))
      .join("");
  };

  return (
    <Link
      key={project.name}
      className="project-button"
      href={`${ROUTES.PROJECT.BASE}/${toSneakCase(project.name)}`}
    >
      {project.name}
    </Link>
  );
};

export default ProjectOverviewCard;
