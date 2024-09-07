import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthDto } from './dto/auth-dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
   

  
  @Post('login') // Especifica a rota /auth/login
  login(@Body() { email, password }: AuthDto) {
    return this.authService.login(email, password);
  }
}
