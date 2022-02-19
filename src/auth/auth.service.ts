import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    Login(email: String, password: String) {
        return email;
    }

    Register(name: String, email: String, password: String) {
        return 'test'
    }
}
