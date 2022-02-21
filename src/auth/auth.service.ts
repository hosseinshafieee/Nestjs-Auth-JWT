import { Injectable } from '@nestjs/common';
import { Users, UsersDocument, UsersSchema } from '../users/Schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
    @InjectModel('users') private usersModel: Model<UsersDocument>, 
    private jwtService: JwtService) { }

    Login(email: String, password: String) {
        return email;
    }
    
    async Register(name: String, email: String, password: String) {
        try {
            const userCheck = await this.usersModel.findOne({ email })
            if (userCheck) return 'user exists';
            await this.usersModel.create({ email, name, password });            
            return this.generateToken(email);
        } catch (e) {
            return e;
        }
    }

    async generateToken(email: String){
        const payload = {email}
        return this.jwtService.sign(payload)
    }

}
