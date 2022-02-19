import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class AuthDto {
  @Field()
  @MaxLength(30)
  email: string;

  @Field()
  @Length(30, 255)
  password?: string;


}