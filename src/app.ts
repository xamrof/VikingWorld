import 'dotenv/config'
import express, { Request, Response } from "express";
import cors from 'cors'
import users from './routes/user.routes'


(() => {
    const port = process.env.PORT || '3001'
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/api/users', users)

    app.listen(port, () => {
        console.log(`App is running in port ${port}`)
    })

})();




