import { Injectable } from '@nestjs/common';
import { CreateTasksStatusDto } from './dto/create-tasks_status.dto';
import { UpdateTasksStatusDto } from './dto/update-tasks_status.dto';
import { TasksStatus } from './entities/tasks_status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksStatusService {

  constructor(
    @InjectRepository(TasksStatus)
    private TasksStatusRepository: Repository<TasksStatus>,
  ){}

  create(createTasksStatusDto: CreateTasksStatusDto) {
    return this.TasksStatusRepository.save(createTasksStatusDto);
  }

  findAll() {
    return this.TasksStatusRepository.find();
  }

  findOne(id: number) {
    return this.TasksStatusRepository.findOneBy({id});
  }

  update(id: number, updateTasksStatusDto: UpdateTasksStatusDto) {
    return this.TasksStatusRepository.update(id,updateTasksStatusDto);
  }

  remove(id: number) {
    return this.TasksStatusRepository.delete(id);
  }
}
