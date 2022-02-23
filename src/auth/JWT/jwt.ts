import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class TokenServices {
    constructor(private jwtService: JwtService) { }

    generateToken(data: object, type: String) {
        const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

        var secret = type == 'access' ? ACCESS_SECRET_KEY : REFRESH_SECRET_KEY;
        const payload = {
            data
        }
        return this.jwtService.sign(payload, {secret})
    }
}
