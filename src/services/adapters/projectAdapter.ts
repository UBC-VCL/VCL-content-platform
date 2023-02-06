import type { BaseResponse } from "./types";
import projectAPI from "../api/projectAPI";

export interface Project {
  name: string;
  description: string;
  members: string[];
  isActive: boolean;
  _id: string;
}

// array of projects
export interface ProjectsResponse extends BaseResponse {
  data?: Project[];
}

// single project
export interface ProjectResponse extends BaseResponse {
  data?: Project;
}

export const callGetAllProjectsAPI = async (): Promise<ProjectsResponse> => {
  try {
    const res = await projectAPI.getAllProjects();
    return res.data as ProjectsResponse;
  } catch (err: any) {
    return err.response.data as BaseResponse;
  }
};

export const callGetProjectByNameAPI = async (
  name: string
): Promise<[ProjectResponse, boolean]> => {
  try {
    const res = await projectAPI.getProjectByName(name);
    return [res.data as ProjectResponse, false];
  } catch (err: any) {
    return [err.response.data as BaseResponse, true];
  }
};
