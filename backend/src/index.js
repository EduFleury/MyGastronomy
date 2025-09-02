import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js' 
import { config } from 'dotenv'
import authRouter from './auth/auth.js'
import usersRouter from './routes/Users.js'
import plateRouter from './routes/Plates.js'
import orderRouter from './routes/Orders.js'

config()

async function main() {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    const mongoConnection = await Mongo.connect({mongoConnectionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME})
    console.log(mongoConnection)

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) =>{
        res.send({
            success: true,
            statuscode: 200,
            body: 'Welcome to Mygastronomy!'
        })
    })

    app.use('/auth', authRouter)
    app.use('/users', usersRouter)
    app.use('/plates', plateRouter)
    app.use('/orders', orderRouter)
    app.listen(port, ()=>{
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()