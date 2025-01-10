const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/stuff.route.js')
const path = require('path')

dotenv.config()

app.use(express.json())
app.use('/api/stuff', route)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
    })
}

try{
    mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT, () => console.log('server is running at http://localhost:' + process.env.PORT))
} catch (error){
    console.log(`Error: ${error}`)
}