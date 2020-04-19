import {Repository} from "typeorm";
import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {Post} from "../entities/Post";
import {CreatePostInput, UpdatePostInput} from "./types/PostInput";

@Service()
@Resolver(of => Post)
export class PostResolver {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {

  }

  @Query(returns => Post, { nullable: true })
  async post(
    @Arg("input")
    postId: number
  ) {
    return await this.postRepository.findOne(postId);
  }

  @Query(returns => [Post])
  async posts(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  @Mutation(returns => Post)
  async addPost(
    @Arg("input")
    postInput: CreatePostInput
  ): Promise<Post> {
    const newPost = this.postRepository.create({
      ...postInput,
    });

    return await this.postRepository.save(newPost);
  }

  @Mutation(returns => Boolean)
  async removePost(
    @Arg("input")
    postId: string
  ): Promise<Boolean> {
    await this.postRepository.delete({ id: postId });
    return true;
  }

  @Mutation(returns => Post)
  async updatePost(
    @Arg("input")
    input: UpdatePostInput
  ): Promise<Post> {
    await this.postRepository.update(input.id, input);
    return await this.postRepository.findOneOrFail({id: input.id});
  }
}
