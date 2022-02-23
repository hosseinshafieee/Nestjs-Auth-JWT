import { Injectable } from '@nestjs/common';
import { Users, UsersDocument, UsersSchema } from '../users/Schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TokenServices } from './JWT/jwt'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('users') private usersModel: Model<UsersDocument>,
        private tokenServices: TokenServices) { }

    async Login(email: String, password: String) {
        const userCheck = await this.usersModel.findOne({ email })
    }

    async Register(name: String, email: String, password: String) {
        try {
            const userCheck = await this.usersModel.findOne({ email })
            if (userCheck) return {
                msg: "user exist"
            };
            await this.usersModel.create({ email, name, password });
            return {
                access_token: this.tokenServices.generateToken(email, 'access'),
                refresh_token: this.tokenServices.generateToken(email, 'refresh'),
            }
        } catch (e) {
            return e;
        }
    }
}
