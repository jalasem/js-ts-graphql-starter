import { addUser } from '../../controller/user'

export default {
  createUser: (_, args: object) => addUser(args),
}
