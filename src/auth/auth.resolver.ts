import { Resolver,Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Query(() => String) 
    async hello() {
        return await this.authService
    }
}
