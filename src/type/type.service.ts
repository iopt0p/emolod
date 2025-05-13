import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Type } from './entities/type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  findAll() {
    return this.typeRepository.find();
  }
}
