import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";

import {User} from "./User";

@ObjectType()
@Entity()
export class Group {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;
}
