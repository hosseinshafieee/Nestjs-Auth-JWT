import { Injectable } from '@nestjs/common';
import { Users, UsersDocument, UsersSchema } from '../users/Schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import {TokenServices} from './JWT/jwt'

@Injectable()
export class AuthService {
    constructor(
    @InjectModel('users') private usersModel: Model<UsersDocument>, 
    private jwtService: JwtService,
    private tokenServices: TokenServices) { }

    async Login(email: String, password: String) {
        const userCheck = await this.usersModel.findOne({ email })
    }
    
    async Register(name: String, email: String, password: String) {
        try {
            const userCheck = await this.usersModel.findOne({ email })
            if (userCheck) return 'user exists';
            await this.usersModel.create({ email, name, password });            
            return this.tokenServices.generateToken(email, 'access')
        } catch (e) {
            return e;
        }
    }
}
