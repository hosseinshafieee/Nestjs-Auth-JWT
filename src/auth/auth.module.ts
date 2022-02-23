import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import {Users, UsersSchema} from '../users/Schemas/users.schema'
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TokenServices } from './JWT/jwt';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]), PassportModule, JwtModule.register({
    secret: "jwtConstants.secret",
    signOptions: { expiresIn: '60s' },
  })],
  providers: [ AuthResolver, AuthService, TokenServices]

})
export class AuthModule {}
