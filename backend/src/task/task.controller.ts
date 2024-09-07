import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UUID } from 'crypto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Post("/create")
  create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    const userId = req.user.id
    return this.taskService.create(createTaskDto,userId);
  }

  @Get("")
   async findAll( @Request() req) {

    const userId = req.user.id
    return this.taskService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {  // Use string ao invés de UUID
    return this.taskService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.taskService.remove(id);
  }
}
