import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository <Task>,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){}
  
  async create(createTaskDto: CreateTaskDto, userId :UUID) {

    const user = await this.userRepository.findOne({
      where : {id : userId},
    })

    if(!user){

      throw new NotFoundException("Usuário não encontrado")
    }
    
   const task =  await this.taskRepository.create(createTaskDto);

  

   return  await this.taskRepository.save(task);
  } 

   async findAll(userId: UUID) {

     const user= await  this.userRepository.findOne({

      where : {id : userId},
      relations: ['task']

  }) 

     if (!user || !user.task || user.task.length === 0){

      throw new NotFoundException("Nenhuma taks cadastrada!")
    
     }

      return user.task
    
  }
  async findOne(id : string) {
    const task = await this.taskRepository.findBy({id})
  
    if (!task) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
  
    return task;
  }
  
 async  update(id: string, updateTaskDto: UpdateTaskDto) {
   
  const taks = await this.taskRepository.preload({
    id,
    ...updateTaskDto,
  })
  if(!taks ){

    throw new NotFoundException(`Task com id ${id} não encontrada!` )
  }

  

    return this.taskRepository.save(taks)
  }

   async remove(id: UUID){
   
    const task = await this.taskRepository.findBy({id})
    
     
    
  
    return this.taskRepository.remove(task)
  }
}
