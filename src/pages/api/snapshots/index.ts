import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from 'utils/helpers/server/connect';
import { handler } from 'utils/helpers/server/errorHandler';
import { validateRoute } from 'utils/helpers/server/validateRoute';
import { USER_TYPE_NAMES } from 'utils/helpers/types';

export default handler(async (req: NextApiRequest, res: NextApiResponse) =>  {
  let result;
  if (req.method === 'GET') result = await getAllSnapshots(req, res);
  if (req.method === 'POST') result = await createSnapshot(req, res);
  return result;
})

type Filter = {
  project?: string;
  date?: string;
  author?: string;
  categories?: string[];
}

type Snapshot = {
  title: string;
  description: string;
  imageURL: string;
  date: string;
  project: string;
  author: string;
  categories: string[];
  contributors: string[];
}

const getAllSnapshots = async (req: NextApiRequest, res: NextApiResponse) => {
  const filter = req.query as Filter;
  const { db } = await connectToDB()
  const snapshots = await db.collection('snapshots').find(filter).sort('date', -1);
  return snapshots.toArray();
};

const createSnapshot = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user) => {
  const isMember = USER_TYPE_NAMES.includes(user.permissions);
  if (!isMember) throw new Error("403");

  const newSnapshot = req.body as Snapshot;
  const { db } = await connectToDB()
  return await db.collection('snapshots').insertOne(newSnapshot);
});
