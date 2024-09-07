import { Exclude } from "class-transformer";
import { Task } from "src/task/entities/task.entity";
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;  // Use string ao invés de UUID

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(type => Task, task => task.user)
  task?: Task[];  // Relacionamento com a entidade Task
}
