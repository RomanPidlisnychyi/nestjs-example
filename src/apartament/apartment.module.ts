import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { apartmentProviders } from './apartment.providers';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ApartmentController],
  providers: [...apartmentProviders, ApartmentService],
  exports: [ApartmentService],
})
export class ApartmentModule {}
