import mongoose from 'mongoose'
import cuid from 'cuid'
import { readFiles } from '../src/utils'
import config from '../src/config'

beforeEach(async () => {
  if (mongoose.connection.readyState === 0) {
    const randomId = cuid()
    await mongoose.connect(`${config.DB_URL}${randomId}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // read files in 'model' directory
    const modelPath = `${__dirname}/../src/db/model`
    const modelNames = await readFiles(
      modelPath,
      fileName => fileName !== 'index.js',
    )
    // import all read files
    const models = await Promise.all(
      modelNames.map(name => import(`${modelPath}/${name}`)),
    )
    // initialize models
    await Promise.all(models.map(model => model.default.init()))
  }
})
afterEach(async () => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.disconnect()
})
