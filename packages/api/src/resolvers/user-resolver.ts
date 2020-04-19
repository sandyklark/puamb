import {Repository} from "typeorm";
import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";

import {User} from "../entities/User";
import {UserInput} from "./types/UserInput";
import {Context} from "../index";

@Service()
@Resolver(of => User)
export class UserResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {

  }

  @Query(returns => User, { nullable: true })
  user(@Arg("userId") userId: string) {
    return this.userRepository.findOne(userId);
  }

  @Query(returns => [User])
  users(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Mutation(returns => User)
  async addUser(
    @Arg("user") userInput: UserInput,
    @Ctx() { user }: Context,
  ): Promise<User> {

    const newUser = this.userRepository.create({
      ...userInput,
    });

    return await this.userRepository.save(newUser);
  }
}
