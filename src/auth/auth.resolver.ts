import { Resolver,Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Query(() => String) 
    async hello() {
        return await this.authService.Login()
    }
}
