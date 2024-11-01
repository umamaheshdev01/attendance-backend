import { Body, Controller, Post } from '@nestjs/common';
import { SignDto } from './dto/sign.dto';
import { LoginDto } from './dto/login-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   
    constructor( private auth : AuthService){}

    @Post('/sign')
    signUp(@Body() signDto : SignDto){
        return this.auth.createUser(signDto)
    }

    @Post('/login')
    login(@Body() loginDto : LoginDto){
       return this.auth.loginUser(loginDto)
    }

}
