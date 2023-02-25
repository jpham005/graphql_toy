import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from 'src/post/post.module';
import { PostsService } from 'src/post/post.service';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';
import { Author, AuthorSchema } from './database/author.database.schema';

@Module({
  imports: [
    PostModule,
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  providers: [AuthorsService, AuthorsResolver, PostsService],
})
export class AuthorsModule {}
