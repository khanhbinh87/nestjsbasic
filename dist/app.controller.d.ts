import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private configService;
    private authService;
    constructor(appService: AppService, configService: ConfigService, authService: AuthService);
    handleLogin(req: any): Promise<{
        access_token: string;
    }>;
}
