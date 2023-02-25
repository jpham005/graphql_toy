import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Author, AuthorDocument } from './database/author.database.schema';

@Injectable()
export class AuthorsService {
  // private readonly authors: Author[] = [
  //   {
  //     id: 1,
  //     firstName: 'jaham',
  //     lastName: 'ham',
  //     posts: [],
  //   },
  // ];

  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {
    // if (true)
    //   this.authorModel.create({
    //     firstName: 'yeju',
    //     lastName: 'ju',
    //     post: [
    //       {
    //         _id: '2'
    //       }
    //     ],
    //   });
  }

  async findOneById(id: mongoose.Schema.Types.ObjectId) {
    console.log('author ' + id);
    return await this.authorModel.findById(id).exec();
  }

  async findAuthorPost(id: mongoose.Schema.Types.ObjectId) {
    return await this.authorModel.findById(id).populate('post').exec();
  }
}
