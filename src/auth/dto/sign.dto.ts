import { IsString, IsEmail, IsInt, Min, IsNumber,Length } from 'class-validator';

export class SignDto {

  @IsNumber()
  id: number;

  
  @IsString()
  @Length(3, undefined, { message: 'Name must be at least 3 characters long.' })
  name : string;

  @IsString()
  @Length(8, undefined, { message: 'Password must be at least 8 characters long.' })
  password : string
}
