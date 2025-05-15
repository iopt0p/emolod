import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../category/entities/category.entity';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique id of the user' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Username' })
  name: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'User email' })
  email: string;

  @Column()
  @ApiProperty({ description: 'User password(min 8)', required: true })
  password: string;

  @OneToMany(() => Category, (category) => category.user)
  @ApiProperty({ type: [Category], description: 'List of categories' })
  categories: Category[];

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
