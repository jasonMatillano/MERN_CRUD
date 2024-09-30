const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


const app = express()
app.use(express.json())
// Use CORS to allow requests from the frontend
app.use(cors({
    origin: '*', // The frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Allow cookies or auth headers
}));

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
}).then(() => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.log(err)
})

app.post('/create', async (req, res) => {
    UserModel.create(req.body)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/', async (req, res) => {
    UserModel.find()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/getUser/:id', async (req, res) => {
    UserModel.findById(req.params.id)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.put('/update/:id', async (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.delete('/delete/:id', async (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

const port = 3001
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})