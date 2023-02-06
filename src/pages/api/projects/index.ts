import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from 'utils/helpers/server/connect';
import { handler } from 'utils/helpers/server/errorHandler';
import { validateRoute } from 'utils/helpers/server/validateRoute';
import { USER_TYPE_NAMES } from 'utils/helpers/types';

export default handler(async (req: NextApiRequest, res: NextApiResponse) =>  {
  let result;
  if (req.method === 'GET') result = await getAllProjects(req, res);
  if (req.method === 'POST') result = await createProject(req, res);
  return result;
})

type Filter = {
  project?: string;
  date?: string;
  author?: string;
  categories?: string[];
}

const getAllProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const filter = req.query as Filter;
  const { db } = await connectToDB()
  const projects = await db.collection('projects').find(filter).sort('date', -1);
  return projects.toArray();
};

interface Project {
  name: string;
  description: string;
  members: string[];
  isActive: boolean;
}

const createProject = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user) => {
  const isMember = USER_TYPE_NAMES.includes(user.permissions);
  if (!isMember) throw new Error("403");

  const newProject = req.body as Project;

  const { db } = await connectToDB()
  const project = await db.collection('snapshots').insertOne(newProject)
  res.status(200).json(project);
});