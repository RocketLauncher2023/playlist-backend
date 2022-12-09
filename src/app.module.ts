import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';
import { OauthModule } from './oauth/oauth.module';

@Module({
  imports: [AuthsModule, OauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
