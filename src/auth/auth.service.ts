import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    Login(email: String, password: String) {
        return password;
    }
}
