import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_category_id: number;

    @Column()
    task_status_id: number;

    @Column()
    user_id: number;

    @Column()
    description: string;

    @Column()
    color: string;
}
