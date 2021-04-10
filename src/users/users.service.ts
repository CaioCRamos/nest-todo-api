import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findOne(name: string): Promise<any> {
    return await this.repository.findOne({ name: name });
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }
}
