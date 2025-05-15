import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  private checkId(id: number) {
    const category = this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  create(createCategoryDto: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.checkId(id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    this.checkId(id);
    this.categoryRepository.update(id, updateCategoryDto);
    return this.categoryRepository.findOneBy({ id });
  }

  remove(id: number) {
    this.checkId(id);
    const result = this.categoryRepository.delete(id);
    return result;
  }
}
