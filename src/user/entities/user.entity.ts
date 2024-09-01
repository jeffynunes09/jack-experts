import { Exclude } from "class-transformer";
import { UUID } from "crypto";
import { Task } from "src/task/entities/task.entity";
import { Column,PrimaryGeneratedColumn,Entity, OneToMany } from "typeorm";



@Entity({name: "users"})
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: UUID;

  @Column()
  name : string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(type => Task, task => task.user)
  task? : Task[]

}
