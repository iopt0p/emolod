import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TypeEnum } from '../type.enum';

@Entity('type')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: TypeEnum, unique: true })
  @ApiProperty({ description: 'Transaction type', example: TypeEnum.EXPENSE })
  name: TypeEnum;
}
