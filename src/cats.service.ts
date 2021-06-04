import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findById(id): string {
    return `It's Cat with id: ${id}`;
  }

  findByQuery(query): string {
    return `This action returns cats by this query ${query}`;
  }

  findAll(): string {
    return 'This action returns all cats';
  }

  create(name): string {
    return `Created new Cat with name: ${name}!`;
  }
}
