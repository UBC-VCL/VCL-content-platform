import { NextApiRequest, NextApiResponse } from "next"

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>

export const handler = (handler: Handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await handler(req, res)
      return res.status(200).json({data})
    }
    catch (error) {
      if (!(error instanceof Error)) {
        return res.status(500).json({ message: 'Something went wrong' })
      }
      if (error.message === '401') {
        return res.status(401).json({ message: 'Invalid access - You must be logged in' })
      } 
      if (error.message === '403') {
        return res.status(403).json({ message: 'Invalid access - You don not have permissions' })
      }
      if (error.message === '404') {
        return res.status(404).json({ message: 'Some field contains incorrect information' })
      }
    } 
  }
}