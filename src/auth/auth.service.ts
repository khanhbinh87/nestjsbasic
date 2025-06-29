import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
       private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUserName(username);
        if(user){
            const isValidPassword = this.usersService.isValidPassword(pass,user.password)
            if (isValidPassword) {
            
              return user;
            }
        }
        return null;
      }
      async login(user: any) {
        const payload = { username: user.email, sub: user._id};
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
