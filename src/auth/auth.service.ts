import { Injectable } from '@nestjs/common';
import { Users, UsersDocument } from './Schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) { }

    Login(email: String, password: String) {
        return email;
    }

    Register(name: String, email: String, password: String) {
        return 'test'
    }
    
}
