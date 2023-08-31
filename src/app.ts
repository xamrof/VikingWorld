import 'dotenv/config'
import express, { Request, Response } from "express";
import cors from 'cors'


(() => {
    const port = process.env.PORT || '3001'
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/', (req: Request, res: Response) => {
        res.json('app is running')
    })

    app.listen(port, () => {
        console.log(`App is running in port ${port}`)
    })

})();




