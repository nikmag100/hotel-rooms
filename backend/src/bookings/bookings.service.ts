import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async createBooking(data: {
    roomId: number;
    guestName: string;
    email: string;
    checkIn: string;
    checkOut: string;
  }) {
    const checkInDate = new Date(`${data.checkIn}T00:00:00`);
    const checkOutDate = new Date(`${data.checkOut}T00:00:00`);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      throw new BadRequestException('Check-in date cannot be in the past',);
    }

    // Check that checkout is after check-in
    if (checkOutDate <= checkInDate) {
      throw new BadRequestException('Check-out date must be after check-in date',);
    }

    // Check whether this room is already booked
    const existingBooking = await this.prisma.booking.findFirst({
      where: {
        roomId: data.roomId,

        checkIn: {
          lt: checkOutDate,
        },

        checkOut: {
          gt: checkInDate,
        },
      },
    });

    if (existingBooking) {
      throw new ConflictException('Room is not available for the selected dates',);
    }

    // Create booking
    return this.prisma.booking.create({
      data: {
        roomId: data.roomId,
        guestName: data.guestName,
        email: data.email,
        checkIn: checkInDate,
        checkOut: checkOutDate,
      },
    });
  }
}