import mongoose, { set } from "mongoose";

const { DATABASE_URL } = process.env;

const dbConnection = {
  url: DATABASE_URL as string,
  options: {
    family: 4,
    serverSelectionTimeoutMS: 45000,
    socketTimeoutMS: 60000
  },
};

if (process.env.DEBUG && process.env.DEBUG === 'true') {
  set('debug', true)
}

export const connectToDatabase = async () => {
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
  })

  mongoose.connection.on('error', (error: any) => {
    console.error('Error connecting to MongoDB', error)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB')
  })

  return mongoose.connect(dbConnection.url, dbConnection.options)
}