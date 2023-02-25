import { Field, Int, ObjectType } from '@nestjs/graphql';
import mongoose from 'mongoose';

@ObjectType()
export class Post {
  @Field((type) => String)
  id: mongoose.Schema.Types.ObjectId;

  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
