import type { NextApiRequest, NextApiResponse } from 'next'
import { handler } from 'utils/helpers/server/errorHandler';
import { nanoid } from "nanoid";
import { validateRoute } from 'utils/helpers/server/validateRoute';
import { connectToDB } from 'utils/helpers/server/connect';

export default handler(async (req: NextApiRequest, res: NextApiResponse) =>  {
  let result;
  if (req.method === 'POST') result = await logout(req, res);
  return result;
})

const logout = validateRoute(async (req: NextApiRequest, res: NextApiResponse, user) => {
  const refresh_token = nanoid();
  const access_token = nanoid();

  const { db } = await connectToDB()
  await db.collection("users").findOneAndUpdate(
    { access_token: user.access_token },
    { $set: { access_token, refresh_token } }
  );

  return true
});