import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from 'utils/helpers/server/connect';
import { handler } from 'utils/helpers/server/errorHandler';

export default handler(async (req: NextApiRequest, res: NextApiResponse) =>  {
  let result;
  if (req.method === 'POST') result = await createMember(req, res);
  return result;
})

interface Member {
  firstName: string;
  lastName: string;
  projects: string[];
  isActive: boolean;
}

const createMember = async (req: NextApiRequest, res: NextApiResponse) => {

  const newMember = req.body as Member;

  const { db } = await connectToDB()
  const member = await db.collection('members').insertOne(newMember)
  res.status(200).json(member);
};