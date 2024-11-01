import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-dto';
import { SignDto } from './dto/sign.dto';

@Injectable()
export class AuthService {

   constructor(private prismaService: PrismaService) {}

   async loginUser(loginDto: LoginDto) {
      const { id, password } = loginDto;
      const student = await this.prismaService.student.findUnique({
         where: { student_id: id },
      });

      if (!student || student.password !== password) {
         throw new UnauthorizedException('Invalid credentials');
      }

      return { message: 'Login successful', studentId: student.student_id };
   }

   async createUser(signDto: SignDto) {
      const { id, name, password } = signDto;

      const student = {
         student_id: id,
         name,
         password,
      };

      try {
         const newStudent = await this.prismaService.student.create({ data: student });
         return { message: 'User created successfully', studentId: newStudent.student_id };
      } catch (error) {
         throw new ConflictException('Conflict')
      }
   }
}
