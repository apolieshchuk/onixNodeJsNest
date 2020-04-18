import * as mongoose from 'mongoose';

export interface User extends mongoose.Document{
  firstName: string,
  lastName: string,
  email: string,
  isAdmin: number,
  verified: number,
}
