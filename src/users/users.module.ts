import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './Schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
