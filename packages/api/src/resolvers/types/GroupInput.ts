import {Field, ID, InputType} from "type-graphql";

import {Group} from "../../entities/Group";

@InputType()
export class CreateGroupInput implements Partial<Group> {
  @Field()
  name: string;
}

@InputType()
export class UpdateGroupInput implements Partial<Group> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}
