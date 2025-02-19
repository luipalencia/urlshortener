import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class HealthService {
  getHealth(): string {
    return "I'm\ healthy!";
  }
}
