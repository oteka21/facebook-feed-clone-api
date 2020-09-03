import { Types } from 'mongoose'

export const verifyId = (id) => {
  return Types.ObjectId.isValid(id)
}
