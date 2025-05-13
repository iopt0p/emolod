import { Controller, Get } from '@nestjs/common';
import { TypeService } from './type.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Type } from './entities/type.entity';

@ApiTags('type')
@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all types' })
  @ApiResponse({
    status: 200,
    type: [Type],
    description: 'Successfully retrieve all types',
  })
  findAll() {
    return this.typeService.findAll();
  }
}
