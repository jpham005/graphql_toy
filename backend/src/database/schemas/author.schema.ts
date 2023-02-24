import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Post } from 'src/post/models/post.model';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({
    type: [{ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] }],
    required: true,
  })
  post: Post[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
