import { findUser } from '../../controller/user'

export default {
  user: async (_, args: { id }) => findUser(args.id),
}
