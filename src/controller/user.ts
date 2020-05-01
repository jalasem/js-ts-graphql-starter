import User from '../db/model/User'
import { UserType } from '../types'

const addUser = (payload: object): Promise<UserType> => {
  const user = new User(payload)
  return user.save()
}

const findUser = (id: string): Promise<UserType> => User.findById(id)

export { addUser, findUser }
