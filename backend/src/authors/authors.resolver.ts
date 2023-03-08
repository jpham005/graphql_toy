import {
  Args,
  Info,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import mongoose from 'mongoose';
import { PostsService } from 'src/post/post.service';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Resolver((_of: any) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((_returns) => Author) // todo: what is this?
  async author(
    @Args('id', { type: () => String }) id: mongoose.Schema.Types.ObjectId,
  ) {
    const data = await this.authorsService.findOneById(id);
    return data;
  }

  @ResolveField()
  async post(@Parent() author: Author) {
    const { id } = author;
    const data = await this.authorsService.findAuthorPost(id);
    if (data) {
      return data.post;
    }

    return null;
  }

  @ResolveField()
  async test(@Info() info: any) {
    info.cacheControl.setCacheHint({ maxAge: 60, scope: 'PUBLIC' });
    console.log(info);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return 'done';
  }
}
