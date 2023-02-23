import { Module } from '@nestjs/common';
import { PostsService } from './post.service';

@Module({
  imports: [],
  providers: [PostsService],
})
export class PostModule {}
