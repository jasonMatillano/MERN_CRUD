const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
}).then(() => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.log(err)
})

app.post('/create', async (req, res) => {
    UserModel.create(req.body)
    .then(() => {
        res.send('User created')
    })
    .catch((err) => {
        console.log(err)
    })
})



const port = 3001
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})