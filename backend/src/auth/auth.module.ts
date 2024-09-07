import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtService,JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { TaskModule } from 'src/task/task.module';
import { TaskService } from 'src/task/task.service';
import { Task } from 'src/task/entities/task.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User,Task]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET'),
        signOptions: { expiresIn: configService.get<string | number>('EXPIRESIN') },
      }),
      inject: [ConfigService],
    }),
    forwardRef(() => UserModule), 
  ],
  providers: [AuthService,UserService,TaskService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}