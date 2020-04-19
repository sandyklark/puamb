import {Repository} from "typeorm";
import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {User} from "../entities/User";
import {CreateUserInput, UpdateUserInput} from "./types/UserInput";

@Service()
@Resolver(of => User)
export class UserResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {

  }

  @Query(returns => User, { nullable: true })
  async user(
    @Arg("input")
    userId: string
  ) {
    return await this.userRepository.findOne(userId);
  }

  @Query(returns => [User])
  async users(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Mutation(returns => User)
  async addUser(
    @Arg("input")
    userInput: CreateUserInput
  ): Promise<User> {
    const newUser = this.userRepository.create({
      ...userInput,
    });

    return await this.userRepository.save(newUser);
  }

  @Mutation(returns => Boolean)
  async removeUser(
    @Arg("input")
    userId: string
  ): Promise<Boolean> {
    await this.userRepository.delete({ id: userId });
    return true;
  }

  @Mutation(returns => User)
  async updateUser(
    @Arg("input")
    input: UpdateUserInput
  ): Promise<User> {
    await this.userRepository.update(input.id, input);
    return await this.userRepository.findOneOrFail({id: input.id});
  }
}
