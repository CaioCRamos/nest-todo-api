import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('todos')
export class TodosController {
  @Get()
  getAll() {
    return [
      { id: 1, todo: 'Limpar a casa' },
      { id: 2, todo: 'Lavar as motos' },
    ];
  }
}
