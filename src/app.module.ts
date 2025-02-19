import { Module } from '@nestjs/common';
import { AppController, HealthController } from './app.controller';
import { AppService, HealthService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService],
})
export class AppModule {}
