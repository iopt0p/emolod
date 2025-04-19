import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1', description: 'Unique id of the category' })
  id: number;

  @Column({ unique: true, length: 50 })
  @ApiProperty({
    example: 'Travels',
    description: 'Unique name of the category',
  })
  name: string;

  @CreateDateColumn()
  @ApiProperty({ description: 'Create date' })
  createdAt: Date;
}
