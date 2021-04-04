import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[] = [
    {
      id: 1,
      name: 'Caio Ramos',
      password: 'Loft@1234',
    },
    {
      id: 2,
      name: 'Tatiane Amaral',
      password: '12345',
    },
  ];

  async findOne(name: string): Promise<any> {
    return this.users.find((user) => user.name === name);
  }
}
