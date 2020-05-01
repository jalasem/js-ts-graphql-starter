import { Document } from 'mongoose'

export type UserT = Document & UserType
export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
}
