import {Field, ID, InputType, Int} from "type-graphql";

import {Post} from "../../entities/Post";
import {Column} from "typeorm";

@InputType()
export class CreatePostInput implements Partial<Post> {
  @Field(type => Int)
  points: number;

  @Field()
  @Column()
  userId: string;
}

@InputType()
export class UpdatePostInput implements Partial<Post> {
  @Field(type => ID)
  id: string;

  @Field(type => Int)
  points: number;
}
