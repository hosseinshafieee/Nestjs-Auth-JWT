import { Injectable } from '@nestjs/common';
import { Users, UsersDocument, UsersSchema } from './Schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(@InjectModel('users') private usersModel: Model<UsersDocument>) { }

    Login(email: String, password: String) {
        return email;
    }
    
    async Register(name: String, email: String, password: String) {
        try {
            const user = await this.usersModel.create({ email, name, password })
            return 'successful';
        } catch (e) {
            return e;
        }
    }

}
