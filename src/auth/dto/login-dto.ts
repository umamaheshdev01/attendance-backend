import { IsString, IsEmail, IsInt, Min, IsNumber,Length } from 'class-validator';

export class LoginDto {
  @IsNumber()
  id: number;

  @IsString()
  @Length(8, undefined, { message: 'Password must be at least 8 characters long.' })
  password : string
}
