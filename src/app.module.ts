import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskCategory } from './task_categories/entities/task_category.entity';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { TasksStatus } from './tasks_status/entities/tasks_status.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User,TaskCategory,TasksStatus,Task],
    synchronize: true,
  }), UsersModule, TaskCategoriesModule, TasksStatusModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
