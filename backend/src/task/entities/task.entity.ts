import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;  // Use string ao invés de UUID

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: false })
  done: boolean;

  @ManyToOne(type => User, user => user.task)
  user: User;  // Relacionamento com a entidade User
}
