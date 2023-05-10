import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { connectDb } from './src/config/configDb.js'

const app = express()

const PORT = 8000

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//database
connectDb()


//router
app.use("/api/v1/user", ()=> {})


//uncaught error handler

app.use("*", (req, res, next) => {
    try {
        const error ={
            errorCode: 404,
            message: error.message}

    } catch (error) {
        next(error)
    }
    
  


}
)




//global error handler
app.use((error, req, res, next)=> {
   const statusCode = error.errorCode || 404

   res.status(statusCode).json({
    status:"error",
    message: error.message
   })
})


app.listen(PORT, (error)=> {
    error ? console.log(error) : console.log(`your server is running at http://localhost:${PORT}`)
})