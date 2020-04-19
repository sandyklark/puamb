import {Field, InputType} from "type-graphql";

import {User} from "../../entities/User";


@InputType()
export class UserInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
