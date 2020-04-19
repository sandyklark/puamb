import {Repository} from "typeorm";
import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {Group} from "../entities/Group";
import {CreateGroupInput, UpdateGroupInput} from "./types/GroupInput";

@Service()
@Resolver(of => Group)
export class GroupResolver {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>
  ) {

  }

  @Query(returns => Group, { nullable: true })
  async group(
    @Arg("input")
    groupId: number
  ) {
    return await this.groupRepository.findOne(groupId);
  }

  @Query(returns => [Group])
  async groups(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  @Mutation(returns => Group)
  async addGroup(
    @Arg("input")
    groupInput: CreateGroupInput
  ): Promise<Group> {
    const newGroup = this.groupRepository.create({
      ...groupInput,
    });

    return await this.groupRepository.save(newGroup);
  }

  @Mutation(returns => Boolean)
  async removeGroup(
    @Arg("input")
    groupId: string
  ): Promise<Boolean> {
    await this.groupRepository.delete({ id: groupId });
    return true;
  }

  @Mutation(returns => Group)
  async updateGroup(
    @Arg("input")
    input: UpdateGroupInput
  ): Promise<Group> {
    await this.groupRepository.update(input.id, input);
    return await this.groupRepository.findOneOrFail({id: input.id});
  }
}
