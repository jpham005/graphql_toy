import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Post, PostDocument } from './database/schemas/post.database.schema';

@Injectable()
export class PostsService {
  // private readonly posts: Post[] = [
  //   {
  //     id: 1,
  //     title: 'one',
  //     votes: 1,
  //   },
  //   {
  //     id: 2,
  //     title: 'two',
  //   },
  // ];

  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {
    if (false)
    postModel.create([
      {
        title: 'yeju first post',
        votes: 3,
      },
      {
        title: 'yeju second post',
        votes: 0,
      },
      {
        title: 'jaham first post',
      },
      {
        title: 'jaham second post',
        votes: 3,
      },
    ]);
  }

  // findAll(authorId: mongoose.Schema.Types.ObjectId) {
  //   console.log('post' + authorId);
  //   return this.posts;
  // }
}
