import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';

export class CreateBookingDto {
  @IsInt()
  @Min(1)
  roomId: number;

  @IsString()
  @IsNotEmpty()
  guestName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  checkIn: string;

  @IsString()
  @IsNotEmpty()
  checkOut: string;
}