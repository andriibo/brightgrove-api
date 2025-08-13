import { Controller, Body, Param } from '@nestjs/common';
import { Get, Post, Put, Delete } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('')
  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({
    status: 200,
    description: 'Успешно получены все пользователи',
  })
  findAll() {
    return this.UsersService.findAll();
  }
  @Post('')
  @ApiOperation({ summary: 'Создать нового пользователя' })
  @ApiResponse({ status: 201, description: 'Пользователь успешно создан' })
  createNew(@Body('email') email: string) {
    return this.UsersService.createNew(email);
  }
  @Put(':id')
  @ApiOperation({ summary: 'Обновить пользователя' })
  @ApiResponse({ status: 200, description: 'Пользователь успешно обновлен' })
  updateUser(@Param('id') id: string, @Body('email') email: string) {
    return this.UsersService.updateUser(+id, email);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Удалить пользователя' })
  @ApiResponse({ status: 200, description: 'Пользователь успешно удален' })
  deleteUser(@Param('id') id: string) {
    return this.UsersService.deleteUser(+id);
  }
}
