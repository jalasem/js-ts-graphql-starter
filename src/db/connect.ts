import mongoose from 'mongoose'
import config from '../config'

export default function connect() {
  mongoose
    .connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(error => console.log('unable to connect to database', error.message))
  return mongoose
}
