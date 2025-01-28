import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(() => User)
  async addNewUser(
    @Args('CreateUserDto') CreateUserDto: CreateUserDto,
  ): Promise<User> {
    const newUser = await this.userService.addNewUser(CreateUserDto);

    return newUser;
  }
}
