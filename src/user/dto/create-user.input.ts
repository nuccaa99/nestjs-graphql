import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field({ nullable: false })
  firstname: string;

  @Field({ nullable: false })
  lastname: string;

  @Field(() => Int)
  age: number;
}
