import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    // POST/auth/signup
    @Post('signup')
    signup(@Body() dto: AuthDto){
        console.log({
            dto,
        });
        return this.authService.signup(dto)
    }
    
    // POST/auth/signup
    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto)
    }

}