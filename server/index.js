require('module-alias/register')
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('@/router/index')

const mongoDB = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`

mongoose.connect(mongoDB)
    .then(() => {
        console.log(`Connected To: ${process.env.MONGO_DATABASE}`)
        app.listen(process.env.BACKEND_PORT, () => {
            console.log(`Server is up on port ${process.env.BACKEND_PORT}`)
        })
    })
    .catch(err => console.log(err))

app.use(router)
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message)
})
