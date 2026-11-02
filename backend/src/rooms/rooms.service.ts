import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class RoomsService {

  constructor(
    private prisma: PrismaService
  ) {}

  getAllRooms() {
    return this.prisma.room.findMany();
  }

  async getRoomById(id: number) {
    const room = await this.prisma.room.findUnique({
      where: {
        id,
      },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    return room;
  }
}