import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Post {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => Int)
    @Column()
    points: number;

    @Field()
    @Column()
    userId: string;
}
