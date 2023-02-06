import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from 'utils/helpers/server/connect';
import { handler } from 'utils/helpers/server/errorHandler';
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export default handler(async (req: NextApiRequest, res: NextApiResponse) =>  {
  let result;
  if (req.method === 'POST') result = await login(req, res);
  return result;
})

type User = {
  username: string;
  password: string;
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.username || !req.body.password) throw new Error("400");
  const userData = req.body as User;
  const { db } = await connectToDB()
  const user = await db.collection("users").findOne({'username': new RegExp(`^${userData.username}$`, 'i')});
  if (!user) throw new Error("401");
  const match = await bcrypt.compare(userData.password, user.hash);
  if (!match) throw new Error("401");
  const access_token = nanoid();
  await db.collection("users").findOneAndUpdate(
    { username: userData.username },
    { $set: { access_token } }
  );

  const data = {
    username: userData.username,
    access_token,
    refresh_token: user.refresh_token,
    permissions: user.permissions,
  }
  return data;
};