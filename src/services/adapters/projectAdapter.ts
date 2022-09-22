import type { BaseResponse } from './types';
import projectAPI from '../api/projectAPI';
import { Project } from '@entities/Project';

interface ProjectResponse extends BaseResponse {
    data? : Project[]
} 

export const callGetAllProjectsAPI = async (): Promise<ProjectResponse> => {
	try {
		const res = await projectAPI.getAllProjects();
		return res.data as ProjectResponse;
	} catch (err: any) {
		return err.response.data as BaseResponse;
	}
};
