const app = require('./app')
const connectToDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config({ path: "server/config/config.env" })

connectToDB()


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})