const express = require("express")
require("dotenv").config()
const dbConnect = require('./config/dbConnect')
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()
app.use(express.json())

dbConnect()

app.get('/', (req, res) => {
  res.status(200).end('Working!')
})

app.use('/api/users', userRoutes)

app.use('/api/auth', authRoutes)


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`))