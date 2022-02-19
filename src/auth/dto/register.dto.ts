import { Field, InputType } from '@nestjs/graphql';
import {Length, MaxLength } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @MaxLength(30)
  email: string;

  @Field()
  @Length(30, 255)
  password: string;

  @Field()
  name : string;

}