import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

console.log("url", baseURL);

export default class ProjectAPI {
  // TODO: prefetching
  static async getAllProjects(): Promise<any> {
    try {
      console.log("fetching")
      const response = await axios.get("/api/projects", {
        baseURL,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  static async getProjectByName(name: string): Promise<any> {
    // TODO: prefetching
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
