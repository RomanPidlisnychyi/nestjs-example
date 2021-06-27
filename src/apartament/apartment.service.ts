import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Apartment } from '../entities/apartment.entity';
import { CreateApartmentRequest } from '../dto';

@Injectable()
export class ApartmentService {
  constructor(
    @Inject('APARTMENT_REPOSITORY')
    private apartmentRepository: Repository<Apartment>,
  ) {}

  create(dto: CreateApartmentRequest) {
    return this.apartmentRepository.save(dto);
  }
  //
  // async findUser(query) {
  //   return this.userRepository.findOne(query);
  // }
  //
  // async delete(id: string) {
  //   const user = await this.userRepository.findOne(id);
  //   await this.userRepository.remove(user);
  // }
  //
  // async findAll() {
  //   return this.userRepository.find();
  // }
}
