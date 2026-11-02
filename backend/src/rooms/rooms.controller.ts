import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from './rooms.service.js';

@Controller('rooms')
export class RoomsController {

  constructor(
    private roomsService: RoomsService
  ) {}

  @Get()
  getRooms() {
    return this.roomsService.getAllRooms();
  }

  @Get(':id')
  getRoom(@Param('id') id: string) {
    return this.roomsService.getRoomById(Number(id));
  }
}