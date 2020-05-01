import { mockServer } from 'graphql-tools'
import getSchemas from '../../src/graphql/schema'
import { user as mockUser } from '../__fixtures__'

describe('Query schema', () => {
  let typeDefs: string
  beforeAll(async () => {
    typeDefs = await getSchemas()
  })
  it('Query', async () => {
    const server = mockServer(typeDefs, {})
    const mutation = `
      mutation CreateUser($firstName: String!, $lastName: String!, $email: String!) {
        createUser(firstName: $firstName, lastName: $lastName, email: $email) {
          firstName
          lastName
          id
          email
        }
      }
    `
    await expect(server.query(mutation, mockUser)).resolves.toBeTruthy()
    const { errors } = await server.query(mutation, mockUser)
    expect(errors).not.toBeTruthy()
  })
})
