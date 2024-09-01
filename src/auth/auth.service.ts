import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"


@Injectable()
export class AuthService {
   
   constructor(
    
    private readonly userService : UserService,
    private readonly jwtService :JwtService
      
   ){}


    async login(email:string, password:string): Promise<{access_token:string}>{

        const user = await this.userService.findByEmail(email);
        
         const isMatch = await  bcrypt.compare(password,user.password)
         
        if( !user ||  !isMatch){
   
         throw new UnauthorizedException("Dados Invalidos!")
        }
   
         const payload = { sub: user.id , username: user.name}
   
       return {
         
        access_token : await this.jwtService.signAsync(payload)
       }
   
     }


}
