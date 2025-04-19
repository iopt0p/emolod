import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { Category } from './entities/category.entity';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiBadRequestResponse({ description: 'Invalid request' })
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({
    status: 201,
    type: Category,
    description: 'Successfully created',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all category' })
  @ApiResponse({
    status: 200,
    type: [Category],
    description: 'Successfully retrieve all category',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiBadRequestResponse({ description: 'Invalid request' })
  @ApiOperation({ summary: 'Get category by id' })
  @ApiResponse({
    status: 200,
    type: Category,
    description: 'Successfully retrieve category by id',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  @ApiBadRequestResponse({ description: 'Invalid request' })
  @ApiOperation({ summary: 'Update category by id' })
  @ApiResponse({ status: 200, description: 'Successfully updated' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiBadRequestResponse({ description: 'Invalid request' })
  @ApiOperation({ summary: 'Delete category by id' })
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  remove(@Param('id') id: number) {
    return this.categoryService.remove(+id);
  }
}
