import {Field, InputType} from "type-graphql";

import {Group} from "../../entities/Group";

@InputType()
export class GroupInput implements Partial<Group> {
  @Field()
  name: string;
}
