import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;

export default class ProjectAPI {
    static async getAllProjects(): Promise<any> {
        try {
            const response = await axios.get("/api/projects", {
                baseURL: "http://localhost:4000",
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

    static async getAllSnapshots(): Promise<any> {
        try {
            const response = await axios.get("/api/snapshots", {
                baseURL: "http://localhost:4000",
            });
            return response;
        } catch (e) {
            throw e;
        }
    }
}
