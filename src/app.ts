import express from 'express'
import graphqlHTTP from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors'
import config from './config'
import * as resolvers from './graphql/resolvers'
import getSchemas from './graphql/schema'
import connectDB from './db/connect'

async function start() {
  connectDB()
  const typeDefs = await getSchemas()
  const { PORT } = config
  const app = express()
  app.use(cors())
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: makeExecutableSchema({ typeDefs, resolvers }),
      graphiql: true,
    })
  )
  app.use('*', (_, res) => res.send('invalid route'))
  app.listen(PORT, () =>
    console.log(`starter server is running on PORT ${PORT}`)
  )
}
start()
