import { Body, Controller, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service.js';
import { CreateBookingDto } from './dto/create-booking.dto.js';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  createBooking(@Body() data: CreateBookingDto) {
    return this.bookingsService.createBooking(data);
  }
}