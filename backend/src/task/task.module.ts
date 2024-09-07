import { forwardRef, Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports :[
    TypeOrmModule.forFeature([Task,User]),
    forwardRef(()=> UserModule,)
  ],
  controllers: [TaskController],
  providers: [TaskService,JwtService],
})
export class TaskModule {}
