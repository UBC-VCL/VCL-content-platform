import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from 'utils/helpers/server/connect';
import { handler } from 'utils/helpers/server/errorHandler';
import { validateRoute } from 'utils/helpers/server/validateRoute';
import { USER_TYPE_NAMES } from 'utils/helpers/types';

export default handler(async (req: NextApiRequest, res: NextApiResponse) =>  {
  let result;
  if (req.method === 'PUT') result = await updateSnapshots(req, res);
  if (req.method === 'DELETE') result = await deleteSnapshot(req, res);
  return result;
})

const updateSnapshots = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user) => {
  const isMember = USER_TYPE_NAMES.includes(user.permissions);
  if (!isMember) throw new Error("403");

  let newSnapshot = req.body;
  const { db } = await connectToDB()
  const author = await db.collection("users").findOne({'username': new RegExp(`^${newSnapshot.author}$`, 'i')});
  if (!author) throw new Error('404');
  newSnapshot.author = author._id;
  
  if (req.body.hasOwnProperty('contributors')) {
    let users = [];
    for (let user of req.body.contributors) {
      const lookup = await db.collection("users").findOne({'username': new RegExp(`^${user}$`, 'i')});
      if (lookup) users.push(lookup._id);
      else throw new Error("404");
    }
    newSnapshot['contributors'] = users;
  }
  const query = { _id: new ObjectId(Array.isArray(req.query?.id)? req.query?.id[0] : req.query?.id) };
  const snapshot = await db.collection("snapshots").findOneAndUpdate(query, {$set: {...newSnapshot}});
  return snapshot;
});

const deleteSnapshot = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user) => {
  const isMember = USER_TYPE_NAMES.includes(user.permissions);
  if (!isMember) throw new Error("403");

  const { db } = await connectToDB()
  const query = { _id: new ObjectId(Array.isArray(req.query?.id)? req.query?.id[0] : req.query?.id) };
  return db.collection("snapshots").findOneAndDelete(query)
});