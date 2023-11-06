import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

// we can do this in main.ts file but this option is only avaible if our guards do not use dependency injection as we gurads are dependent on api key so we have to do it here
@Module({
  imports: [ConfigModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
export class CommonModule implements NestModule {
  // supplies methods to tie middle to specific routes
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*'); //applies to all routes
    // consumer.apply(LoggingMiddleware).forRoutes('coffees'); applies to the route that have coffees in them
    // consumer
    //   .apply(LoggingMiddleware)
    //      .exclude({ path: 'coffees', method: RequestMethod.GET }) //also can exckude path
    //   .forRoutes({ path: 'coffees', method: RequestMethod.GET }); //applies to the route that have coffees in them and request method is GET
  }
}
