import { mockServer } from 'graphql-tools'
import getSchemas from '../../src/graphql/schema'

describe('Product schema', () => {
  let typeDefs: string
  beforeAll(async () => {
    typeDefs = await getSchemas()
  })
  it('Query', async () => {
    const server = mockServer(typeDefs, {})
    const query = `
      {
        user(id: "5e43e7270841d5185b943dfa") {
          firstName
          lastName
          id
          email
        }
      }
    `
    await expect(server.query(query)).resolves.toBeTruthy()
    const { errors } = await server.query(query, {})
    expect(errors).not.toBeTruthy()
  })
})
