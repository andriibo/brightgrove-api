import {
  BaseEntity,
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class UserEntity extends BaseEntity {
  @ApiProperty({ example: 1, description: 'Уникальный айди пользователя' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Email пользователя',
  })
  @Column()
  email: string;

  @ApiProperty({
    example: '2023-10-01T12:00:00Z',
    description: 'Дата создания пользователя',
  })
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @ApiProperty({
    example: '2023-10-01T12:00:00Z',
    description: 'Дата обновления пользователя',
  })
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
