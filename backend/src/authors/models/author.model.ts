import { Field, Int, ObjectType } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class Author {
  @Field((type) => String)
  id: mongoose.Schema.Types.ObjectId;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => [Post], { nullable: 'items' })
  post: Post[];
}
