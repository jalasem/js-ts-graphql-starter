import { Schema, model } from 'mongoose'
import { UserT } from '../../types'

let UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
})

export default model<UserT>('User', UserSchema)
