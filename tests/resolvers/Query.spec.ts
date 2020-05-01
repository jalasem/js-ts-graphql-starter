import resolvers from '../../src/graphql/resolvers/Query'
import User from '../../src/db/model/User'
import { user as mockUser } from '../__fixtures__'

describe('Query resolvers', () => {
  test('user', async () => {
    // const user = await User.create(mockUser)
    // const result = await resolvers.user(null, { id: user._id })
    // expect(`${result.id}`).toBe(`${user.id}`)
  })
})
