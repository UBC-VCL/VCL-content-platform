import axios from "axios";

export default class ProjectAPI {
  static async getAllProjects(): Promise<any> {
    try {
      const response = await axios.get("/api/projects");
      return response;
    } catch (e) {
      throw e;
    }
  }

  static async getProjectByName(name: string): Promise<any> {
    // TODO: prefetching
    try {
      const response = await axios.get(`/api/projects/${name}`);
      return response;
    } catch (e) {
      throw e;
    }
  }
}
