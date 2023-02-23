import { Module } from '@nestjs/common';
import { PostModule } from 'src/post/models/post.module';
import { PostsService } from 'src/post/models/post.service';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';

@Module({
  imports: [PostModule],
  providers: [AuthorsService, AuthorsResolver, PostsService],
})
export class AuthorsModule {}
