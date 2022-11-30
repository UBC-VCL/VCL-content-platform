import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;

interface Timeline {
    _id: string,
    __v: number,
    title: string,
    description: string,
    imageURL: string,
    date: string,
    project: string,
    author: any,
    categories: Array<string>,
    contributors: Array<any>,
    createdAt: Date,
    updatedAt: Date,
}

const getAllTimelines = async (): Promise<any> => {
    try {
        const response = await axios.get<any>("/api/snapshots", {
            baseURL,
        });
        return response;
    } catch (e) {
        throw e;
    }
}

const editTimeline = async (id:string, newTimeline:Timeline): Promise<any> => {
    try {
        const response = await axios.put<Timeline>(`/api/snapshots/${id}`, newTimeline, {
            baseURL,
        });
        return response;
    } catch (e) {
        throw e;
    }
}

export { getAllTimelines, editTimeline }
