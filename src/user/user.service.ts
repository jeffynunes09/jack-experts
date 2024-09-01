import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ user: User }> {
    try {
      const checkEmailUser = await this.findByEmail(createUserDto.email);

      if (checkEmailUser) throw new ConflictException('Usuário já cadastrado!');

      const user = this.userRepository.create(createUserDto);

      //HASH PADRONIZADO
      const passwordHash = await this.hashPassword(createUserDto.password);
    
      user.password = passwordHash;

      const savedUser = await this.userRepository.save(user);
      

      return { user: plainToClass(User, savedUser) };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


 //METODO PARA HASH DE SENHA
  async hashPassword ( password:string ): Promise<string>{
      
      const salt = await bcrypt.genSalt();
       
      return bcrypt.hash(password,salt)
  }
     


  async findByEmail (userEmail:string): Promise<User> {

    return this.userRepository.findOne({
      where: {
        email : userEmail
      }
    })

  }



}


