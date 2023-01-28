import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default class ProjectAPI {
  static async getAllProjects(): Promise<any> {
    try {
      const response = await axios.get("/api/projects", {
        baseURL,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  static async getProjectByName(name: string): Promise<any> {
    try {
      const response = await axios.get(`/api/projects/${name}`, {
        baseURL: "http://localhost:4000",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }
}
