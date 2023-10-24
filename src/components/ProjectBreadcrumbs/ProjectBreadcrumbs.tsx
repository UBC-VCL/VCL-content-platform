import React from "react";
import "./ProjectBreadcrumbs.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ROUTES from "@statics/routes";
import { useLocation } from "react-router-dom";
interface ProjectBreadcrumbsParam {
  project_name: string;
  page_name: string;
}

const ProjectBreadcrumbs: React.FC<ProjectBreadcrumbsParam> = (props) => {
  const { pathname } = useLocation();
  const lightModePages = ["join", "resources", "team", "publications"];
  const isLightMode = lightModePages.includes(pathname.split("/")[3]);

  return (
    <Breadcrumbs
      separator=">"
      style={{
        marginTop: "4%",
        marginBottom: "6%",
        color: "#AEC7EC",
        marginLeft: "-3%",
      }}
    >
      <Link
        href={ROUTES.PROJECT.BASE}
        underline="none"
        id="project-breadcrumbs"
        style={{ color: isLightMode ? "#AEC7EC" : "#60779A" }}
      >
        <b>All Projects</b>
      </Link>
      <Link
        href={ROUTES.PROJECT.BASE + "/" + props.project_name}
        underline="none"
        id="project-breadcrumbs"
        style={{ color: isLightMode ? "#AEC7EC" : "#60779A" }}
      >
        <b>{props.project_name} </b>
      </Link>
      <Typography
        className="current-page"
        style={{ color: isLightMode ? "#60779A" : "#AEC7EC" }}
      >
        <b>{props.page_name}</b>
      </Typography>
    </Breadcrumbs>
  );
};

export default ProjectBreadcrumbs;
