import { NextApiRequest, NextApiResponse } from "next"
import { connectToDB } from "./connect"

type Handler = (req: NextApiRequest, res: NextApiResponse, user: any) => Promise<any>

export const validateRoute = (handler: Handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const accessToken = req.headers.authorization
    if (!accessToken) {
      return res.status(401).json({message: "Access forbiden"})
    }
    const { db } = await connectToDB()
    const user = await db.collection('users').findOne({ access_token: accessToken })
    if (!user) {
      return res.status(401).json({message: "Access forbiden"})
    }
    return handler(req, res, user)
  }
}