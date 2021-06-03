import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'This action returns all cats';
  }

  findByQuery(query): string {
    return `This action returns cats by this query ${query}`;
  }

  createCat(name): string {
    return `Created new Cat with name: ${name}!`;
  }
}
