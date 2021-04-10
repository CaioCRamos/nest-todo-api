import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    const result = await this.service.create({
      id: 0,
      name: userDto.name,
      email: userDto.email,
      password: userDto.password,
    });

    return {
      id: result.id,
      name: result.name,
    };
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
