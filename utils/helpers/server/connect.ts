import { MongoClient } from 'mongodb'

declare global {
  var mongo: {client: MongoClient};
}

global.mongo = global.mongo || {}

export const connectToDB = async () => {
  if (!global.mongo.client) {
    if (!process.env.DATABASE_URI) {
      throw new Error('No database URI')
    }
    global.mongo.client = new MongoClient(process.env.DATABASE_URI)

    await global.mongo.client.connect()
    console.log('connected to DB')
  }

  const db = global.mongo.client.db('VCL-Documentation-App')

  return { db, dbClient: global.mongo.client }
}