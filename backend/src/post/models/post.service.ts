import { Injectable } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [
    {
      id: 1,
      title: 'one',
      votes: 1,
    },
    {
      id: 2,
      title: 'two',
    },
  ];

  constructor() {
    const hi = {
      id: 3,
      title: 'three',
      opps: 3,
    };
    this.posts.push(hi);
  }

  findAll({ authorId }: { authorId: number }) {
    console.log('post' + authorId);
    return this.posts;
  }
}
