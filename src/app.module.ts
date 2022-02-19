import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
 


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }), MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule],
})
export class AppModule { }
