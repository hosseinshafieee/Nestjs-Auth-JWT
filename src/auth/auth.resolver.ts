import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto'
import { TokensDto } from './dto/tokens.dto';


@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Query(() => String)
    async login(@Args('inputs') authDto: AuthDto) {
        const { email, password } = authDto;
        return await this.authService.Login(email, password)
    }

    @Mutation(() => TokensDto)
    async register(@Args('inputs') registerDto: RegisterDto): Promise<TokensDto> {
        const { name, email, password } = registerDto;
        return await this.authService.Register(name, email, password)
    }
}
