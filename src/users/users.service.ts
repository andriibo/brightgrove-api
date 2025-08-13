import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  createNew(email: string): Promise<UserEntity> {
    const user = this.userRepository.create({ email });

    return this.userRepository.save(user);
  }

  async updateUser(id: number, email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User by id is not found');
    }

    user.email = email;

    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<{ message: string }> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('user not found');
    }

    return { message: 'user deleted' };
  }
}
