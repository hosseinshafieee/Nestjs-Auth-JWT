import { Resolver,Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Query(() => String) 
    async login(@Args('inputs') authDto: AuthDto) {
        const {email, password} = authDto;
        return await this.authService.Login(email, password)
    }
}
