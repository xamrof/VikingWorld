import 'dotenv/config'
import express, { Request, Response } from "express";
import cors from 'cors'
import users from './routes/user.routes'
import { errorHandler } from './middlewares/errorHandler';


(() => {
    const port = process.env.PORT || '3001'
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/api/users', users)

    app.use(errorHandler)

    app.listen(port, () => {
        console.log(`App is running in port ${port}`)
    })

})();




