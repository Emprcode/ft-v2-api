import mongoose from 'mongoose'

export const connectDb = async() => {
    const mongoUrl = process.env.MONGO_URL
    const conn = await mongoose.connect(mongoUrl)

    conn && console.log("mongo connected")
}