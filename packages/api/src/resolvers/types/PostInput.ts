import {Field, InputType, Int} from "type-graphql";

import {Post} from "../../entities/Post";

@InputType()
export class PostInput implements Partial<Post> {
  @Field(type => Int)
  points: number;
}
