import express from 'express'
import connectDB from './models'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
}))

app.use('/api', router)


connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
})
