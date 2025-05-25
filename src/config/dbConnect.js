const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONN_STR)
    console.log(`Connected to database: ${connect.connection.host}, ${connect.connection.name}`)
  } catch(err) {
    console.log(`Error occured: ${err}`)
    process.exit(1)
  }
}
module.exports = dbConnect