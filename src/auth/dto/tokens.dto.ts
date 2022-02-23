import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokensDto {
  @Field({nullable: true})
  access_token: string;

  @Field({nullable: true})
  refresh_token: string;

  @Field({nullable: true})
  msg: string;
}