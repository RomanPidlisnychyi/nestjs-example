import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { idGenerator } from '../helpers/idGenerator';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    cat.id = idGenerator(this.cats);
    this.cats.push(cat);

    return cat;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    // this.cats.length = 0;
    console.log('updateCatDto', updateCatDto);
  }

  delete(id: number) {
    let result;
    this.cats.forEach((cat: Cat, index: number) => {
      if (cat.id === id) {
        this.cats.splice(index, 1);
        result = id;
      }
    });

    return result;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }
}
