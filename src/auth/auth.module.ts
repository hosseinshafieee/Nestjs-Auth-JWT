import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import {Users, UsersSchema} from './Schemas/users.schema'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }])],
  providers: [ AuthResolver, AuthService]

})
export class AuthModule {}
