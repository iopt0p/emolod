import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../../type/entities/type.entity';
import { Category } from '../../category/entities/category.entity';
import { TypeEnum } from '../../type/type.enum';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1', description: 'Unique id of the transaction' })
  id: number;

  @ManyToOne(() => Type, { eager: true })
  @ApiProperty({ enum: TypeEnum })
  type: Type;

  @ManyToOne(() => Category, { onDelete: 'CASCADE', eager: true })
  @ApiProperty()
  category: Category;

  @Column({ type: 'decimal' })
  @ApiProperty({ example: 125.25, description: 'Transaction amount' })
  value: number;

  @Column({ type: 'date' })
  @ApiProperty({
    example: 'CURRENT_TIMESTAMP',
    description: 'Date of the transaction',
  })
  date: Date;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: Date;
}
