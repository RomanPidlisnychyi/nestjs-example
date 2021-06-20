import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from '../entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_REPOSITORY')
    private catRepository: Repository<Cat>,
  ) {}
  // private catRepository = getRepository(CatEntity);
  async create(cat) {
    // cat.id = idGenerator(this.cats);
    // this.cats.push(cat);
    // const newCat = await this.catRepository.create(cat);
    // console.log('newCat', newCat);
    return cat;
  }

  // update(id: number, updateCatDto: UpdateCatDto) {}
  //
  // delete(id: number) {
  //   let result;
  //   this.cats.forEach((cat: CatEntity, index: number) => {
  //     if (cat.id === id) {
  //       this.cats.splice(index, 1);
  //       result = id;
  //     }
  //   });
  //
  //   return result;
  // }
  //
  findAll() {
    return this.catRepository.find();
  }
  //
  // findOne(id: number): CatEntity {
  //   return this.cats.find((cat) => cat.id === id);
  // }
}
