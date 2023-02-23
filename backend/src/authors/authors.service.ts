import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [
    {
      id: 1,
      firstName: 'jaham',
      lastName: 'ham',
      posts: [],
    },
  ];

  findOneById(id: number) {
    console.log('author ' + id);
    return this.authors[0];
  }
}
