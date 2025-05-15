import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../auth/entities/user.entity';

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

  @ManyToOne(() => User, (user) => user.categories)
  @ApiProperty({ example: '1', description: 'Unique id of the category' })
  user: User;

  @CreateDateColumn()
  @ApiProperty({ description: 'Create date' })
  createdAt: Date;
}
