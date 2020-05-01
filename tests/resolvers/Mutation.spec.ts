import resolvers from '../../src/graphql/resolvers/Mutation'
import User from '../../src/db/model/User'
import { user as mockUser } from '../__fixtures__'

describe('Mutation resolvers', () => {
  test('user', async () => {
    const result = await resolvers.createUser(null, { ...mockUser })
    const user = await User.findById(result.id)
    expect(`${result.id}`).toBe(`${user.id}`)
  })
})
