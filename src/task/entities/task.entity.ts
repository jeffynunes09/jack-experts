

import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";


@Entity({name: "tasks"})
export class Task {

    @PrimaryGeneratedColumn('uuid')
    id: UUID;


    @Column()
    name: string;


    @Column()
    description : string;


    @Column({default: false})

    done: boolean;
  
    @ManyToOne(type => User, user => user.task)

    user: User;


}
