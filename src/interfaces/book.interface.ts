import * as mongoose from 'mongoose';

export interface Book extends mongoose.Document{
  blogpost: string,
  title: string,
  author: string,
  published:{
    publisher: string,
    year: number,
  },
}
