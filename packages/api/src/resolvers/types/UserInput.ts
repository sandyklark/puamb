import {Field, ID, InputType, Int} from "type-graphql";

import {User} from "../../entities/User";

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field(type => ID)
  id: string;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  email?: string;

  @Field({nullable: true})
  groupId?: string;

  @Field(type => Int,{nullable: true})
  points?: number;
}

@InputType()
export class UpdateUserInput implements Partial<User> {
  @Field(type => ID)
  id: string;

  @Field({nullable: true})
  groupId?: string;

  @Field(type => Int, {nullable: true})
  points?: number;
}
