import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDocument } from './Schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel('users') private usersModel: Model<UsersDocument>,){}

    findOneByEmail(email){
        const users = this.usersModel.findOne({email})
        return users; 
    }
}
